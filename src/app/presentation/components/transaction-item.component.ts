import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Transaction } from '../../domain/entities/transaction.entity';
import { Account } from '../../domain/entities/account.entity';

@Component({
  selector: 'app-transaction-item',
  standalone: false,
  moduleId: 'module.id',
  template: `
    <ion-item class="transaction-item" (click)="onItemClick()">
      <ion-icon 
        [name]="getTransactionIcon()" 
        [color]="getTransactionColor()" 
        slot="start"
        class="transaction-icon">
      </ion-icon>
      <ion-label>
        <div class="transaction-header">
          <span class="transaction-type">{{ transaction.type }}</span>
          <span class="transaction-amount" [class.positive]="isPositive()" [class.negative]="!isPositive()">
            {{ isPositive() ? '+' : '-' }}{{ transaction.currency }} {{ transaction.amount.toFixed(2) }}
          </span>
        </div>
        <div class="transaction-description">{{ transaction.description }}</div>
        <div class="transaction-meta">
          <span class="transaction-reference">Ref: {{ transaction.referenceNumber }}</span>
          <span class="transaction-date">{{ formatDate(transaction.createdAt) }}</span>
        </div>
        <div class="transaction-details" *ngIf="showDetails">
          <div class="detail-item" *ngIf="transaction.fee > 0">
            <span>Comisión:</span>
            <span>{{ transaction.currency }} {{ transaction.fee.toFixed(2) }}</span>
          </div>
          <div class="detail-item" *ngIf="transaction.tax > 0">
            <span>Impuesto:</span>
            <span>{{ transaction.currency }} {{ transaction.tax.toFixed(2) }}</span>
          </div>
          <div class="detail-item" *ngIf="transaction.relatedAccountId">
            <span>Cuenta relacionada:</span>
            <span>{{ transaction.relatedAccountId }}</span>
          </div>
          <div class="detail-item">
            <span>Estado:</span>
            <span [class]="'status-' + transaction.status.toLowerCase()">{{ transaction.status }}</span>
          </div>
        </div>
      </ion-label>
      <ion-button 
        fill="clear" 
        slot="end" 
        (click)="toggleDetails($event)" 
        *ngIf="transaction.fee > 0 || transaction.tax > 0 || transaction.relatedAccountId">
        <ion-icon [name]="showDetails ? 'chevron-up' : 'chevron-down'"></ion-icon>
      </ion-button>
    </ion-item>
  `,
  styles: [`
    .transaction-item {
      --padding-start: 16px;
      --padding-end: 16px;
      --padding-top: 12px;
      --padding-bottom: 12px;
      border-bottom: 1px solid var(--ion-color-light);
    }
    .transaction-icon {
      font-size: 24px;
      margin-right: 12px;
    }
    .transaction-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 4px;
    }
    .transaction-type {
      font-weight: 600;
      font-size: 1rem;
      text-transform: capitalize;
    }
    .transaction-amount {
      font-size: 1.1rem;
      font-weight: bold;
    }
    .transaction-amount.positive {
      color: var(--ion-color-success);
    }
    .transaction-amount.negative {
      color: var(--ion-color-danger);
    }
    .transaction-description {
      color: var(--ion-color-medium);
      font-size: 0.9rem;
      margin-bottom: 4px;
    }
    .transaction-meta {
      display: flex;
      justify-content: space-between;
      font-size: 0.8rem;
      color: var(--ion-color-medium);
    }
    .transaction-reference {
      font-family: monospace;
    }
    .transaction-details {
      margin-top: 12px;
      padding: 8px;
      background: var(--ion-color-light);
      border-radius: 8px;
    }
    .detail-item {
      display: flex;
      justify-content: space-between;
      padding: 4px 0;
      font-size: 0.85rem;
    }
    .status-completed {
      color: var(--ion-color-success);
    }
    .status-pending {
      color: var(--ion-color-warning);
    }
    .status-failed {
      color: var(--ion-color-danger);
    }
  `]
})
export class TransactionItemComponent {
  @Input() transaction: Transaction | null = null;
  @Input() relatedAccount: Account | null = null;
  @Output() itemClick = new EventEmitter<Transaction>();
  
  showDetails: boolean = false;

  constructor() {}

  onItemClick(): void {
    if (this.transaction) {
      this.itemClick.emit(this.transaction);
    }
  }

  toggleDetails(event: Event): void {
    event.stopPropagation();
    this.showDetails = !this.showDetails;
  }

  isPositive(): boolean {
    if (!this.transaction) return false;
    return this.transaction.type.toLowerCase() === 'deposit' || 
           this.transaction.type.toLowerCase() === 'credit' ||
           this.transaction.amount > 0;
  }

  getTransactionIcon(): string {
    if (!this.transaction) return 'help-circle';
    const type = this.transaction.type.toLowerCase();
    switch (type) {
      case 'deposit':
        return 'arrow-down-circle';
      case 'withdraw':
      case 'withdrawal':
        return 'arrow-up-circle';
      case 'transfer':
        return 'swap-horizontal';
      case 'payment':
        return 'card';
      case 'fee':
        return 'remove-circle';
      case 'interest':
        return 'trending-up';
      default:
        return 'cash';
    }
  }

  getTransactionColor(): string {
    if (!this.transaction) return 'medium';
    if (this.isPositive()) return 'success';
    return 'danger';
  }

  formatDate(date: Date): string {
    const d = new Date(date);
    return d.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }
}