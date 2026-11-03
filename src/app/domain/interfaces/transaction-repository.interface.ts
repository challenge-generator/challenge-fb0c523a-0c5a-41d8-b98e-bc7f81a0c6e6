import { Observable } from 'rxjs';
import { Transaction } from '../entities/transaction.entity';
import { Account } from '../entities/account.entity';

export interface TransactionFilter {
  accountId?: string;
  type?: string;
  status?: string;
  startDate?: Date;
  endDate?: Date;
  minAmount?: number;
  maxAmount?: number;
  currency?: string;
}

export interface TransactionSummary {
  totalTransactions: number;
  totalAmount: number;
  totalFees: number;
  totalTaxes: number;
  byType: Record<string, { count: number; amount: number }>;
  byStatus: Record<string, { count: number; amount: number }>;
}

export interface TransactionRepository {
  findAll(): Observable<Transaction[]>;
  findById(id: string): Observable<Transaction | null>;
  findByAccountId(accountId: string): Observable<Transaction[]>;
  findByReferenceNumber(referenceNumber: string): Observable<Transaction | null>;
  findByType(type: string): Observable<Transaction[]>;
  findByStatus(status: string): Observable<Transaction[]>;
  findByDateRange(accountId: string, startDate: Date, endDate: Date): Observable<Transaction[]>;
  search(filter: TransactionFilter): Observable<Transaction[]>;
  save(transaction: Transaction): Observable<Transaction>;
  update(id: string, transactionData: Partial<Transaction>): Observable<Transaction>;
  delete(id: string): Observable<boolean>;
  processTransaction(transaction: Transaction, account: Account): Observable<Transaction>;
  validateTransaction(transaction: Transaction, account: Account): Observable<boolean>;
  getTransactionsByAccount(accountId: string, limit?: number, offset?: number): Observable<Transaction[]>;
  getRecentTransactions(accountId: string, limit: number): Observable<Transaction[]>;
  getPendingTransactions(accountId: string): Observable<Transaction[]>;
  getCompletedTransactions(accountId: string): Observable<Transaction[]>;
  getFailedTransactions(accountId: string): Observable<Transaction[]>;
  getTransactionSummary(accountId: string, startDate?: Date, endDate?: Date): Observable<TransactionSummary>;
  getTotalAmountByType(accountId: string, type: string): Observable<number>;
  getTotalFeesByAccount(accountId: string): Observable<number>;
  getTotalTaxesByAccount(accountId: string): Observable<number>;
  countTransactions(): Observable<number>;
  countTransactionsByAccount(accountId: string): Observable<number>;
  updateTransactionStatus(id: string, status: string): Observable<Transaction>;
  cancelTransaction(id: string): Observable<Transaction>;
  getIncomingTransactions(accountId: string): Observable<Transaction[]>;
  getOutgoingTransactions(accountId: string): Observable<Transaction[]>;
}