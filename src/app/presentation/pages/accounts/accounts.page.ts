import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonButton, IonLoading, IonRefresher, IonRefresherContent } from '@ionic/angular/standalone';
import { Account } from '../../../domain/entities/account.entity';
import { AccountService } from '../../../domain/services/account.service';
import { User } from '../../../domain/entities/user.entity';
import { AuthService } from '../../../domain/services/auth.service';
import { Observable, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.page.html',
  styleUrls: ['./accounts.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonList,
    IonItem,
    IonLabel,
    IonButton,
    IonLoading,
    IonRefresher,
    IonRefresherContent
  ]
})
export class AccountsPage implements OnInit, OnDestroy {
  accounts: Account[] = [];
  user: User | null = null;
  isLoading: boolean = true;
  errorMessage: string = '';
  totalBalance: number = 0;
  currency: string = 'USD';
  private destroy$ = new Subject<void>();

  constructor(
    private accountService: AccountService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loadUserData();
    this.loadAccounts();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private loadUserData(): void {
    this.authService.getCurrentUser()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (user) => {
          this.user = user;
        },
        error: (err) => {
          console.error('Error loading user data:', err);
        }
      });
  }

  loadAccounts(): void {
    this.isLoading = true;
    this.errorMessage = '';

    this.accountService.getAccounts()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (accounts) => {
          this.accounts = accounts;
          this.calculateTotalBalance();
          this.isLoading = false;
        },
        error: (err) => {
          this.errorMessage = 'Error al cargar las cuentas. Intente de nuevo.';
          this.isLoading = false;
          console.error('Error loading accounts:', err);
        }
      });
  }

  private calculateTotalBalance(): void {
    this.totalBalance = this.accounts
      .filter(account => account.isActive)
      .reduce((sum, account) => sum + account.balance, 0);

    if (this.accounts.length > 0) {
      this.currency = this.accounts[0].currency;
    }
  }

  getAccountTypeLabel(type: string): string {
    const typeLabels: Record<string, string> = {
      'checking': 'Cuenta Corriente',
      'savings': 'Cuenta de Ahorros',
      'investment': 'Cuenta de Inversión',
      'credit': 'Tarjeta de Crédito'
    };
    return typeLabels[type] || type;
  }

  formatBalance(balance: number): string {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: this.currency
    }).format(balance);
  }

  navigateToDetail(accountId: string): void {
    console.log('Navigating to account detail:', accountId);
  }

  handleRefresh(event: any): void {
    this.loadAccounts();
    setTimeout(() => {
      event.target.complete();
    }, 1000);
  }

  doDeposit(account: Account): void {
    console.log('Deposit to account:', account.id);
  }

  doWithdraw(account: Account): void {
    console.log('Withdraw from account:', account.id);
  }

  getActiveAccounts(): Account[] {
    return this.accounts.filter(account => account.isActive);
  }

  getInactiveAccounts(): Account[] {
    return this.accounts.filter(account => !account.isActive);
  }

  hasAccounts(): boolean {
    return this.accounts.length > 0;
  }

  getAccountCount(): number {
    return this.accounts.length;
  }

  getActiveAccountCount(): number {
    return this.getActiveAccounts().length;
  }
}