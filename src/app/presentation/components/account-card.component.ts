import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Account } from '../../domain/entities/account.entity';

@Component({
  selector: 'app-account-card',
  standalone: false,
  moduleId: 'module.id',
  template: `
    <ion-card class="account-card" (click)="onCardClick()">
      <ion-card-header>
        <ion-card-title class="account-number">{{ account.accountNumber }}</ion-card-title>
        <ion-card-subtitle class="account-type">{{ account.accountType }}</ion-card-subtitle>
      </ion-card-header>
      <ion-card-content>
        <div class="balance-section">
          <span class="balance-label">Saldo disponible</span>
          <span class="balance-amount">{{ account.currency }} {{ account.balance.toFixed(2) }}</span>
        </div>
        <div class="account-details">
          <div class="detail-row">
            <span class="detail-label">Límite de sobregiro:</span>
            <span class="detail-value">{{ account.currency }} {{ account.overdraftLimit.toFixed(2) }}</span>
          </div>
          <div class="detail-row">
            <span class="detail-label">Última transacción:</span>
            <span class="detail-value">{{ formatDate(account.lastTransactionDate) }}</span>
          </div>
          <div class="detail-row">
            <span class="detail-label">Estado:</span>
            <span class="detail-value" [class.active]="account.isActive" [class.inactive]="!account.isActive">
              {{ account.isActive ? 'Activa' : 'Inactiva' }}
            </span>
          </div>
          <div class="detail-row">
            <span class="detail-label">Creada:</span>
            <span class="detail-value">{{ formatDate(account.createdAt) }}</span>
          </div>
        </div>
        <div class="actions">
          <ion-button fill="outline" size="small" (click)="onDeposit($event)">Depositar</ion-button>
          <ion-button fill="outline" size="small" (click)="onWithdraw($event)">Retirar</ion-button>
          <ion-button fill="clear" size="small" (click)="onViewTransactions($event)">Ver transacciones</ion-button>
        </div>
      </ion-card-content>
    </ion-card>
  `,
  styles: [`
    .account-card {
      margin: 16px;
      border-radius: 12px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    .account-number {
      font-size: 1.2rem;
      font-weight: 600;
      letter-spacing: 2px;
    }
    .account-type {
      text-transform: uppercase;
      font-size: 0.8rem;
      color: var(--ion-color-medium);
    }
    .balance-section {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 16px 0;
      border-bottom: 1px solid var(--ion-color-light);
    }
    .balance-label {
      font-size: 0.9rem;
      color: var(--ion-color-medium);
    }
    .balance-amount {
      font-size: 2rem;
      font-weight: bold;
      color: var(--ion-color-primary);
    }
    .account-details {
      padding: 12px 0;
    }
    .detail-row {
      display: flex;
      justify-content: space-between;
      padding: 8px 0;
      font-size: 0.9rem;
    }
    .detail-label {
      color: var(--ion-color-medium);
    }
    .detail-value.active {
      color: var(--ion-color-success);
    }
    .detail-value.inactive {
      color: var(--ion-color-danger);
    }
    .actions {
      display: flex;
      justify-content: space-between;
      padding-top: 12px;
      border-top: 1px solid var(--ion-color-light);
    }
  `]
})
export class AccountCardComponent {
  @Input() account: Account | null = null;
  @Output() cardClick = new EventEmitter<Account>();
  @Output() depositClick = new EventEmitter<Account>();
  @Output() withdrawClick = new EventEmitter<Account>();
  @Output() viewTransactionsClick = new EventEmitter<Account>();

  constructor() {}

  onCardClick(): void {
    if (this.account) {
      this.cardClick.emit(this.account);
    }
  }

  onDeposit(event: Event): void {
    event.stopPropagation();
    if (this.account) {
      this.depositClick.emit(this.account);
    }
  }

  onWithdraw(event: Event): void {
    event.stopPropagation();
    if (this.account) {
      this.withdrawClick.emit(this.account);
    }
  }

  onViewTransactions(event: Event): void {
    event.stopPropagation();
    if (this.account) {
      this.viewTransactionsClick.emit(this.account);
    }
  }

  formatDate(date: Date | null): string {
    if (!date) {
      return 'Sin transacciones';
    }
    const d = new Date(date);
    return d.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }
}