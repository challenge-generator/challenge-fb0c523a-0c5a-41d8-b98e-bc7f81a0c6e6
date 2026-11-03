import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Account } from '../entities/account.entity';
import { Transaction } from '../entities/transaction.entity';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private readonly API_BASE_URL = 'https://api.fintech.example.com/v1';
  private cache: Map<string, { data: any; timestamp: number }> = new Map();
  private readonly CACHE_TTL_MS = 5 * 60 * 1000;

  constructor(private http: HttpClient) {}

  getAccountsByUserId(userId: string): Observable<Account[]> {
    const cacheKey = `accounts_${userId}`;
    const cached = this.getFromCache<Account[]>(cacheKey);
    if (cached) {
      return of(cached);
    }

    return this.http.get<Account[]>(`${this.API_BASE_URL}/users/${userId}/accounts`).pipe(
      tap(accounts => this.setCache(cacheKey, accounts)),
      map(accounts => accounts.filter(acc => acc.isActive)),
      catchError(this.handleError.bind(this))
    );
  }

  getAccountById(accountId: string): Observable<Account> {
    return this.http.get<Account>(`${this.API_BASE_URL}/accounts/${accountId}`).pipe(
      catchError(this.handleError.bind(this))
    );
  }

  createAccount(userId: string, accountType: string, initialBalance: number = 0): Observable<Account> {
    const newAccount = {
      userId,
      accountType,
      balance: initialBalance,
      currency: 'USD',
      isActive: true,
      overdraftLimit: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    return this.http.post<Account>(`${this.API_BASE_URL}/accounts`, newAccount).pipe(
      tap(account => {
        this.invalidateUserCache(userId);
        console.log(`[AccountService] Cuenta creada exitosamente: ${account.id}`);
      }),
      catchError(this.handleError.bind(this))
    );
  }

  updateAccount(accountId: string, updates: Partial<Account>): Observable<Account> {
    return this.http.put<Account>(`${this.API_BASE_URL}/accounts/${accountId}`, {
      ...updates,
      updatedAt: new Date()
    }).pipe(
      tap(updatedAccount => {
        this.invalidateUserCache(updatedAccount.userId);
        console.log(`[AccountService] Cuenta actualizada: ${accountId}`);
      }),
      catchError(this.handleError.bind(this))
    );
  }

  deactivateAccount(accountId: string): Observable<void> {
    return this.http.patch<void>(`${this.API_BASE_URL}/accounts/${accountId}/deactivate`, {
      isActive: false,
      updatedAt: new Date()
    }).pipe(
      tap(() => console.log(`[AccountService] Cuenta desactivada: ${accountId}`)),
      catchError(this.handleError.bind(this))
    );
  }

  getTransactions(accountId: string, limit: number = 50): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(
      `${this.API_BASE_URL}/accounts/${accountId}/transactions`,
      { params: { limit: limit.toString() } }
    ).pipe(
      map(transactions => transactions.sort((a, b) => 
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      )),
      catchError(this.handleError.bind(this))
    );
  }

  performDeposit(accountId: string, amount: number, description: string = 'Depósito'): Observable<Transaction> {
    if (amount <= 0) {
      return throwError(() => new Error('El monto del depósito debe ser mayor a cero'));
    }

    const transaction = {
      accountId,
      type: 'DEPOSIT',
      amount,
      currency: 'USD',
      description,
      status: 'PENDING'
    };

    return this.http.post<Transaction>(
      `${this.API_BASE_URL}/accounts/${accountId}/transactions/deposit`,
      transaction
    ).pipe(
      tap(tx => console.log(`[AccountService] Depósito realizado: ${tx.id}`)),
      catchError(this.handleError.bind(this))
    );
  }

  performWithdrawal(accountId: string, amount: number, description: string = 'Retiro'): Observable<Transaction> {
    if (amount <= 0) {
      return throwError(() => new Error('El monto del retiro debe ser mayor a cero'));
    }

    const transaction = {
      accountId,
      type: 'WITHDRAWAL',
      amount,
      currency: 'USD',
      description,
      status: 'PENDING'
    };

    return this.http.post<Transaction>(
      `${this.API_BASE_URL}/accounts/${accountId}/transactions/withdraw`,
      transaction
    ).pipe(
      tap(tx => console.log(`[AccountService] Retiro realizado: ${tx.id}`)),
      catchError(this.handleError.bind(this))
    );
  }

  performTransfer(fromAccountId: string, toAccountId: string, amount: number, description: string = 'Transferencia'): Observable<Transaction> {
    if (amount <= 0) {
      return throwError(() => new Error('El monto de la transferencia debe ser mayor a cero'));
    }

    if (fromAccountId === toAccountId) {
      return throwError(() => new Error('No se puede transferir a la misma cuenta'));
    }

    const transaction = {
      accountId: fromAccountId,
      type: 'TRANSFER',
      amount,
      currency: 'USD',
      description,
      relatedAccountId: toAccountId,
      status: 'PENDING'
    };

    return this.http.post<Transaction>(
      `${this.API_BASE_URL}/accounts/${fromAccountId}/transactions/transfer`,
      { ...transaction, toAccountId }
    ).pipe(
      tap(tx => console.log(`[AccountService] Transferencia realizada: ${tx.id}`)),
      catchError(this.handleError.bind(this))
    );
  }

  getAccountBalance(accountId: string): Observable<{ available: number; current: number; pending: number }> {
    return this.http.get<{ available: number; current: number; pending: number }>(
      `${this.API_BASE_URL}/accounts/${accountId}/balance`
    ).pipe(
      catchError(this.handleError.bind(this))
    );
  }

  validateAccountForTransaction(accountId: string, amount: number): Observable<boolean> {
    return this.getAccountById(accountId).pipe(
      map(account => {
        if (!account.isActive) {
          throw new Error('La cuenta no está activa');
        }
        if (account.balance < amount) {
          const availableBalance = account.balance + account.overdraftLimit;
          if (availableBalance < amount) {
            throw new Error('Saldo insuficiente para realizar la operación');
          }
        }
        return true;
      }),
      catchError(this.handleError.bind(this))
    );
  }

  private getFromCache<T>(key: string): T | null {
    const cached = this.cache.get(key);
    if (cached && Date.now() - cached.timestamp < this.CACHE_TTL_MS) {
      return cached.data as T;
    }
    this.cache.delete(key);
    return null;
  }

  private setCache(key: string, data: any): void {
    this.cache.set(key, { data, timestamp: Date.now() });
  }

  private invalidateUserCache(userId: string): void {
    const cacheKey = `accounts_${userId}`;
    this.cache.delete(cacheKey);
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'Ha ocurrido un error inesperado';

    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error de red: ${error.error.message}`;
    } else {
      switch (error.status) {
        case 400:
          errorMessage = error.error?.message || 'Solicitud inválida';
          break;
        case 401:
          errorMessage = 'No autorizado. Por favor, inicie sesión nuevamente';
          break;
        case 403:
          errorMessage = 'Acceso denegado';
          break;
        case 404:
          errorMessage = 'Recurso no encontrado';
          break;
        case 500:
          errorMessage = 'Error del servidor. Intente más tarde';
          break;
        default:
          errorMessage = error.error?.message || `Error: ${error.status}`;
      }
    }

    console.error('[AccountService] Error HTTP:', errorMessage, error);
    return throwError(() => new Error(errorMessage));
  }
}