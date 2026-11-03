import { Component, OnInit, OnDestroy } from '@angular/core';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { Account } from '../../../domain/entities/account.entity';
import { Transaction } from '../../../domain/entities/transaction.entity';
import { AccountService } from '../../../domain/services/account.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.page.html',
  styleUrls: ['./transactions.page.scss'],
  standalone: false
})
export class TransactionsPage implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  
  transactions: Transaction[] = [];
  filteredTransactions: Transaction[] = [];
  accounts: Account[] = [];
  selectedAccountId: string = '';
  isLoading: boolean = false;
  errorMessage: string = '';
  searchTerm: string = '';
  filterType: string = 'all';
  sortOrder: 'date' | 'amount' | 'type' = 'date';
  currentPage: number = 1;
  pageSize: number = 20;
  totalTransactions: number = 0;

  constructor(
    private accountService: AccountService,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private toastController: ToastController,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadAccounts();
    this.loadTransactions();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadAccounts(): void {
    this.accountService.getAccounts()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (accounts) => {
          this.accounts = accounts;
          if (accounts.length > 0 && !this.selectedAccountId) {
            this.selectedAccountId = accounts[0].id;
          }
        },
        error: (error) => {
          console.error('Error loading accounts:', error);
          this.showError('No se pudieron cargar las cuentas');
        }
      });
  }

  loadTransactions(): void {
    if (!this.selectedAccountId) {
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    const account = this.accounts.find(a => a.id === this.selectedAccountId);
    if (account && account.transactions) {
      this.transactions = account.transactions;
      this.totalTransactions = this.transactions.length;
      this.applyFilters();
      this.isLoading = false;
    } else {
      this.accountService.getTransactionsByAccount(this.selectedAccountId)
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: (transactions) => {
            this.transactions = transactions;
            this.totalTransactions = transactions.length;
            this.applyFilters();
            this.isLoading = false;
          },
          error: (error) => {
            this.isLoading = false;
            this.errorMessage = 'Error al cargar transacciones';
            console.error('Error loading transactions:', error);
            this.showError(this.errorMessage);
          }
        });
    }
  }

  onAccountChange(event: any): void {
    this.selectedAccountId = event.detail.value;
    this.currentPage = 1;
    this.loadTransactions();
  }

  applyFilters(): void {
    let result = [...this.transactions];

    if (this.searchTerm) {
      const term = this.searchTerm.toLowerCase();
      result = result.filter(t => 
        t.description.toLowerCase().includes(term) ||
        t.referenceNumber.toLowerCase().includes(term) ||
        t.type.toLowerCase().includes(term)
      );
    }

    if (this.filterType !== 'all') {
      result = result.filter(t => t.type === this.filterType);
    }

    result.sort((a, b) => {
      switch (this.sortOrder) {
        case 'date':
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        case 'amount':
          return Math.abs(b.amount) - Math.abs(a.amount);
        case 'type':
          return a.type.localeCompare(b.type);
        default:
          return 0;
      }
    });

    this.filteredTransactions = result.slice(0, this.currentPage * this.pageSize);
  }

  onSearchChange(event: any): void {
    this.searchTerm = event.detail.value;
    this.currentPage = 1;
    this.applyFilters();
  }

  onFilterChange(event: any): void {
    this.filterType = event.detail.value;
    this.currentPage = 1;
    this.applyFilters();
  }

  onSortChange(event: any): void {
    this.sortOrder = event.detail.value;
    this.applyFilters();
  }

  loadMore(event: any): void {
    setTimeout(() => {
      this.currentPage++;
      this.applyFilters();
      event.target.complete();
      
      if (this.filteredTransactions.length >= this.totalTransactions) {
        event.target.disabled = true;
      }
    }, 500);
  }

  async refreshTransactions(): Promise<void> {
    const loading = await this.loadingController.create({
      message: 'Actualizando transacciones...',
      spinner: 'circles'
    });
    await loading.present();

    this.loadTransactions();
    
    setTimeout(async () => {
      await loading.dismiss();
      const toast = await this.toastController.create({
        message: 'Transacciones actualizadas',
        duration: 2000,
        color: 'success',
        position: 'bottom'
      });
      await toast.present();
    }, 1000);
  }

  async showTransactionDetails(transaction: Transaction): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Detalle de Transacción',
      message: `
        <div class="transaction-details">
          <p><strong>Tipo:</strong> ${this.getTransactionTypeLabel(transaction.type)}</p>
          <p><strong>Monto:</strong> ${this.formatAmount(transaction)}</p>
          <p><strong>Descripción:</strong> ${transaction.description}</p>
          <p><strong>Fecha:</strong> ${this.formatDate(transaction.createdAt)}</p>
          <p><strong>Referencia:</strong> ${transaction.referenceNumber}</p>
          <p><strong>Estado:</strong> ${this.getStatusLabel(transaction.status)}</p>
          ${transaction.fee > 0 ? `<p><strong>Comisión:</strong> ${transaction.fee.toFixed(2)}</p>` : ''}
          ${transaction.tax > 0 ? `<p><strong>Impuesto:</strong> ${transaction.tax.toFixed(2)}</p>` : ''}
        </div>
      `,
      buttons: [
        {
          text: 'Cerrar',
          role: 'cancel'
        },
        {
          text: 'Compartir',
          handler: () => {
            this.shareTransaction(transaction);
          }
        }
      ]
    });
    await alert.present();
  }

  getTransactionTypeLabel(type: string): string {
    const typeLabels: Record<string, string> = {
      'deposit': 'Depósito',
      'withdrawal': 'Retiro',
      'transfer': ' Transferencia',
      'payment': 'Pago',
      'fee': 'Comisión',
      'interest': 'Interés',
      'dividend': 'Dividendo',
      'refund': 'Reembolso'
    };
    return typeLabels[type.toLowerCase()] || type;
  }

  formatAmount(transaction: Transaction): string {
    const sign = transaction.type === 'deposit' || transaction.type === 'refund' ? '+' : '-';
    return `${sign}$${Math.abs(transaction.amount).toFixed(2)} ${transaction.currency}`;
  }

  formatDate(date: Date | string): string {
    const d = new Date(date);
    return d.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  getStatusLabel(status: string): string {
    const statusLabels: Record<string, string> = {
      'pending': 'Pendiente',
      'completed': 'Completada',
      'failed': 'Fallida',
      'cancelled': 'Cancelada',
      'reversed': 'Reversada'
    };
    return statusLabels[status.toLowerCase()] || status;
  }

  getStatusColor(status: string): string {
    const colors: Record<string, string> = {
      'pending': 'warning',
      'completed': 'success',
      'failed': 'danger',
      'cancelled': 'medium',
      'reversed': 'tertiary'
    };
    return colors[status.toLowerCase()] || 'primary';
  }

  getTransactionIcon(type: string): string {
    const icons: Record<string, string> = {
      'deposit': 'arrow-down-circle',
      'withdrawal': 'arrow-up-circle',
      'transfer': 'swap-horizontal',
      'payment': 'card',
      'fee': 'remove-circle',
      'interest': 'trending-up',
      'dividend': 'gift',
      'refund': 'return-up-back'
    };
    return icons[type.toLowerCase()] || 'help-circle';
  }

  async shareTransaction(transaction: Transaction): Promise<void> {
    const message = `Transacción ${this.getTransactionTypeLabel(transaction.type)}\nMonto: ${this.formatAmount(transaction)}\nFecha: ${this.formatDate(transaction.createdAt)}\nReferencia: ${transaction.referenceNumber}`;
    
    const toast = await this.toastController.create({
      message: 'Compartir transacción: ' + message,
      duration: 3000,
      position: 'bottom'
    });
    await toast.present();
  }

  async showError(message: string): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Error',
      message: message,
      buttons: ['Aceptar']
    });
    await alert.present();
  }

  trackByTransactionId(index: number, transaction: Transaction): string {
    return transaction.id;
  }

  getTransactionCount(): number {
    return this.filteredTransactions.length;
  }

  getTotalAmount(): number {
    return this.filteredTransactions.reduce((sum, t) => sum + t.amount, 0);
  }

  getFilteredCount(): number {
    return this.filteredTransactions.length;
  }

  hasMoreTransactions(): boolean {
    return this.filteredTransactions.length < this.totalTransactions;
  }

  clearFilters(): void {
    this.searchTerm = '';
    this.filterType = 'all';
    this.sortOrder = 'date';
    this.currentPage = 1;
    this.applyFilters();
  }

  exportTransactions(): void {
    const csvContent = this.generateCSV();
    console.log('Exporting transactions:', csvContent);
  }

  private generateCSV(): string {
    const headers = ['Fecha', 'Tipo', 'Monto', 'Descripción', 'Referencia', 'Estado'];
    const rows = this.filteredTransactions.map(t => [
      this.formatDate(t.createdAt),
      this.getTransactionTypeLabel(t.type),
      t.amount.toString(),
      t.description,
      t.referenceNumber,
      this.getStatusLabel(t.status)
    ]);
    
    return [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
  }

  navigateToAccountDetails(accountId: string): void {
    this.router.navigate(['/accounts', accountId]);
  }
}