import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of, throwError } from 'rxjs';
import { delay, map, catchError, tap } from 'rxjs/operators';
import { Account } from '../../domain/entities/account.entity';
import { Transaction } from '../../domain/entities/transaction.entity';
import { HttpClientService } from '../services/http-client.service';

@Injectable({
  providedIn: 'root'
})
export class AccountRepository {
  private accountsCache = new BehaviorSubject<Account[]>([]);
  private readonly API_ENDPOINT = '/api/accounts';

  constructor(private httpClient: HttpClientService) {}

  getAccountsByUserId(userId: string): Observable<Account[]> {
    return this.httpClient.get<Account[]>(`${this.API_ENDPOINT}/user/${userId}`).pipe(
      map(accounts => accounts.map(acc => this.hydrateAccount(acc))),
      tap(accounts => this.accountsCache.next(accounts)),
      catchError(error => {
        console.error('Error fetching accounts:', error);
        return of(this.getMockAccounts(userId));
      })
    );
  }

  getAccountById(accountId: string): Observable<Account | undefined> {
    return this.httpClient.get<Account>(`${this.API_ENDPOINT}/${accountId}`).pipe(
      map(account => account ? this.hydrateAccount(account) : undefined),
      catchError(error => {
        console.error('Error fetching account:', error);
        return of(undefined);
      })
    );
  }

  createAccount(account: Partial<Account>): Observable<Account> {
    return this.httpClient.post<Account>(this.API_ENDPOINT, account).pipe(
      map(created => this.hydrateAccount(created)),
      catchError(error => {
        console.error('Error creating account:', error);
        return throwError(() => new Error('Failed to create account'));
      })
    );
  }

  updateAccount(accountId: string, updates: Partial<Account>): Observable<Account> {
    return this.httpClient.put<Account>(`${this.API_ENDPOINT}/${accountId}`, updates).pipe(
      map(updated => this.hydrateAccount(updated)),
      catchError(error => {
        console.error('Error updating account:', error);
        return throwError(() => new Error('Failed to update account'));
      })
    );
  }

  deleteAccount(accountId: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.API_ENDPOINT}/${accountId}`).pipe(
      catchError(error => {
        console.error('Error deleting account:', error);
        return throwError(() => new Error('Failed to delete account'));
      })
    );
  }

  deposit(accountId: string, amount: number, description: string): Observable<Transaction> {
    return this.httpClient.post<Transaction>(`${this.API_ENDPOINT}/${accountId}/deposit`, {
      amount,
      description
    }).pipe(
      catchError(error => {
        console.error('Error processing deposit:', error);
        return throwError(() => new Error('Failed to process deposit'));
      })
    );
  }

  withdraw(accountId: string, amount: number, description: string): Observable<Transaction> {
    return this.httpClient.post<Transaction>(`${this.API_ENDPOINT}/${accountId}/withdraw`, {
      amount,
      description
    }).pipe(
      catchError(error => {
        console.error('Error processing withdrawal:', error);
        return throwError(() => new Error('Failed to process withdrawal'));
      })
    );
  }

  getAccountTransactions(accountId: string): Observable<Transaction[]> {
    return this.httpClient.get<Transaction[]>(`${this.API_ENDPOINT}/${accountId}/transactions`).pipe(
      map(transactions => transactions.map(tx => this.hydrateTransaction(tx))),
      catchError(error => {
        console.error('Error fetching transactions:', error);
        return of([]);
      })
    );
  }

  getCachedAccounts(): Observable<Account[]> {
    return this.accountsCache.asObservable();
  }

  clearCache(): void {
    this.accountsCache.next([]);
  }

  private hydrateAccount(data: any): Account {
    const account = new Account(
      data.id,
      data.userId,
      data.accountNumber,
      data.accountType,
      data.balance,
      data.currency,
      data.isActive,
      data.createdAt,
      data.updatedAt
    );
    account.overdraftLimit = data.overdraftLimit || 0;
    account.lastTransactionDate = data.lastTransactionDate ? new Date(data.lastTransactionDate) : null;
    return account;
  }

  private hydrateTransaction(data: any): Transaction {
    const transaction = new Transaction(
      data.id,
      data.accountId,
      data.type,
      data.amount,
      data.currency,
      data.description,
      data.createdAt,
      data.status,
      data.referenceNumber
    );
    transaction.relatedAccountId = data.relatedAccountId || null;
    transaction.fee = data.fee || 0;
    transaction.tax = data.tax || 0;
    transaction.metadata = data.metadata || {};
    return transaction;
  }

  private getMockAccounts(userId: string): Account[] {
    const mockAccount = new Account(
      'acc-001',
      userId,
      '1234567890',
      'checking',
      5000.00,
      'USD',
      true,
      new Date(),
      new Date()
    );
    mockAccount.overdraftLimit = 1000.00;
    mockAccount.lastTransactionDate = new Date();
    return [mockAccount];
  }
}