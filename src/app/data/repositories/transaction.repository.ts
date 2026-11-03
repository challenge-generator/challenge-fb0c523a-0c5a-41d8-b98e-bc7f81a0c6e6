import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of, throwError } from 'rxjs';
import { map, catchError, tap, mergeMap, finalize } from 'rxjs/operators';
import { Transaction } from '../../domain/entities/transaction.entity';
import { Account } from '../../domain/entities/account.entity';
import { HttpClientService } from '../services/http-client.service';
import { AccountRepository } from './account.repository';

export interface TransactionFilter {
  accountId?: string;
  type?: string;
  startDate?: Date;
  endDate?: Date;
  minAmount?: number;
  maxAmount?: number;
  status?: string;
}

export interface TransactionPage {
  transactions: Transaction[];
  total: number;
  page: number;
  pageSize: number;
}

@Injectable({
  providedIn: 'root'
})
export class TransactionRepository {
  private transactionsCache = new BehaviorSubject<Map<string, Transaction[]>>(new Map());
  private pendingTransactions = new BehaviorSubject<Transaction[]>([]);
  private readonly API_ENDPOINT = '/api/transactions';

  constructor(
    private httpClient: HttpClientService,
    private accountRepository: AccountRepository
  ) {}

  getTransactions(filters?: TransactionFilter): Observable<Transaction[]> {
    const queryParams = this.buildQueryParams(filters);
    return this.httpClient.get<Transaction[]>(`${this.API_ENDPOINT}?${queryParams}`).pipe(
      map(transactions => transactions.map(tx => this.hydrateTransaction(tx))),
      tap(transactions => this.updateCache(transactions, filters?.accountId)),
      catchError(error => {
        console.error('Error fetching transactions:', error);
        return of([]);
      })
    );
  }

  getTransactionById(transactionId: string): Observable<Transaction | undefined> {
    return this.httpClient.get<Transaction>(`${this.API_ENDPOINT}/${transactionId}`).pipe(
      map(transaction => transaction ? this.hydrateTransaction(transaction) : undefined),
      catchError(error => {
        console.error('Error fetching transaction:', error);
        return of(undefined);
      })
    );
  }

  getTransactionsByAccount(accountId: string): Observable<Transaction[]> {
    const cached = this.transactionsCache.value.get(accountId);
    if (cached && cached.length > 0) {
      return of(cached);
    }

    return this.accountRepository.getAccountTransactions(accountId).pipe(
      tap(transactions => this.transactionsCache.value.set(accountId, transactions)),
      catchError(error => {
        console.error('Error fetching account transactions:', error);
        return of([]);
      })
    );
  }

  createTransaction(transaction: Partial<Transaction>): Observable<Transaction> {
    return this.httpClient.post<Transaction>(this.API_ENDPOINT, transaction).pipe(
      map(created => this.hydrateTransaction(created)),
      tap(created => this.addPendingTransaction(created)),
      catchError(error => {
        console.error('Error creating transaction:', error);
        return throwError(() => new Error('Failed to create transaction'));
      })
    );
  }

  updateTransaction(transactionId: string, updates: Partial<Transaction>): Observable<Transaction> {
    return this.httpClient.put<Transaction>(`${this.API_ENDPOINT}/${transactionId}`, updates).pipe(
      map(updated => this.hydrateTransaction(updated)),
      tap(updated => this.updateInCache(updated)),
      catchError(error => {
        console.error('Error updating transaction:', error);
        return throwError(() => new Error('Failed to update transaction'));
      })
    );
  }

  deleteTransaction(transactionId: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.API_ENDPOINT}/${transactionId}`).pipe(
      tap(() => this.removeFromCache(transactionId)),
      catchError(error => {
        console.error('Error deleting transaction:', error);
        return throwError(() => new Error('Failed to delete transaction'));
      })
    );
  }

  getTransactionsPaged(page: number, pageSize: number, filters?: TransactionFilter): Observable<TransactionPage> {
    const queryParams = this.buildQueryParams(filters);
    return this.httpClient.get<TransactionPage>(
      `${this.API_ENDPOINT}/paged?page=${page}&pageSize=${pageSize}&${queryParams}`
    ).pipe(
      map(page => ({
        ...page,
        transactions: page.transactions.map(tx => this.hydrateTransaction(tx))
      })),
      catchError(error => {
        console.error('Error fetching paged transactions:', error);
        return of({
          transactions: [],
          total: 0,
          page,
          pageSize
        });
      })
    );
  }

  getTransactionsByDateRange(accountId: string, startDate: Date, endDate: Date): Observable<Transaction[]> {
    return this.getTransactions({
      accountId,
      startDate,
      endDate
    });
  }

  getTransactionsByType(accountId: string, type: string): Observable<Transaction[]> {
    return this.getTransactions({
      accountId,
      type
    });
  }

  getPendingTransactions(): Observable<Transaction[]> {
    return this.pendingTransactions.asObservable();
  }

  clearPendingTransactions(): void {
    this.pendingTransactions.next([]);
  }

  clearCache(): void {
    this.transactionsCache.next(new Map());
  }

  private buildQueryParams(filters?: TransactionFilter): string {
    if (!filters) return '';
    
    const params: string[] = [];
    if (filters.accountId) params.push(`accountId=${filters.accountId}`);
    if (filters.type) params.push(`type=${filters.type}`);
    if (filters.startDate) params.push(`startDate=${filters.startDate.toISOString()}`);
    if (filters.endDate) params.push(`endDate=${filters.endDate.toISOString()}`);
    if (filters.minAmount !== undefined) params.push(`minAmount=${filters.minAmount}`);
    if (filters.maxAmount !== undefined) params.push(`maxAmount=${filters.maxAmount}`);
    if (filters.status) params.push(`status=${filters.status}`);
    
    return params.join('&');
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

  private updateCache(transactions: Transaction[], accountId?: string): void {
    if (accountId) {
      const currentCache = this.transactionsCache.value;
      currentCache.set(accountId, transactions);
      this.transactionsCache.next(currentCache);
    }
  }

  private updateInCache(transaction: Transaction): void {
    const currentCache = this.transactionsCache.value;
    const accountTransactions = currentCache.get(transaction.accountId);
    if (accountTransactions) {
      const index = accountTransactions.findIndex(tx => tx.id === transaction.id);
      if (index !== -1) {
        accountTransactions[index] = transaction;
        currentCache.set(transaction.accountId, accountTransactions);
        this.transactionsCache.next(currentCache);
      }
    }
  }

  private removeFromCache(transactionId: string): void {
    const currentCache = this.transactionsCache.value;
    for (const [accountId, transactions] of currentCache.entries()) {
      const filtered = transactions.filter(tx => tx.id !== transactionId);
      if (filtered.length !== transactions.length) {
        currentCache.set(accountId, filtered);
        this.transactionsCache.next(currentCache);
        break;
      }
    }
  }

  private addPendingTransaction(transaction: Transaction): void {
    const current = this.pendingTransactions.value;
    this.pendingTransactions.next([...current, transaction]);
  }
}