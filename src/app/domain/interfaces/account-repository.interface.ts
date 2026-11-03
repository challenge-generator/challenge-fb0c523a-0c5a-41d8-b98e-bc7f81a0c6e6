import { Observable } from 'rxjs';
import { Account } from '../entities/account.entity';
import { Transaction } from '../entities/transaction.entity';

export interface AccountFilter {
  userId?: string;
  accountType?: string;
  currency?: string;
  isActive?: boolean;
}

export interface AccountBalance {
  accountId: string;
  balance: number;
  availableBalance: number;
  overdraftUsed: number;
  lastUpdated: Date;
}

export interface AccountRepository {
  findAll(): Observable<Account[]>;
  findById(id: string): Observable<Account | null>;
  findByAccountNumber(accountNumber: string): Observable<Account | null>;
  findByUserId(userId: string): Observable<Account[]>;
  findByAccountType(accountType: string): Observable<Account[]>;
  search(filter: AccountFilter): Observable<Account[]>;
  save(account: Account): Observable<Account>;
  update(id: string, accountData: Partial<Account>): Observable<Account>;
  delete(id: string): Observable<boolean>;
  activateAccount(id: string): Observable<Account>;
  deactivateAccount(id: string): Observable<Account>;
  getActiveAccounts(): Observable<Account[]>;
  getInactiveAccounts(): Observable<Account[]>;
  getAccountsWithOverdraft(): Observable<Account[]>;
  updateBalance(id: string, newBalance: number): Observable<Account>;
  deposit(accountId: string, amount: number, description: string): Observable<Transaction>;
  withdraw(accountId: string, amount: number, description: string): Observable<Transaction>;
  transfer(fromAccountId: string, toAccountId: string, amount: number, description: string): Observable<Transaction>;
  getAccountBalance(accountId: string): Observable<AccountBalance>;
  getTotalBalanceByUser(userId: string): Observable<number>;
  getAccountsByCurrency(currency: string): Observable<Account[]>;
  countAccounts(): Observable<number>;
  countAccountsByUser(userId: string): Observable<number>;
}