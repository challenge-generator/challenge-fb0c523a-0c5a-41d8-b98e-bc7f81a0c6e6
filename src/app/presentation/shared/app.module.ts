import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { RouteReuseStrategy } from '@angular/router';

import { AccountCardComponent } from '../components/account-card.component';
import { TransactionItemComponent } from '../components/transaction-item.component';

import { LoginPage } from '../pages/auth/login.page';
import { AccountsPage } from '../pages/accounts/accounts.page';
import { TransactionsPage } from '../pages/transactions/transactions.page';

@NgModule({
  declarations: [
    AccountCardComponent,
    TransactionItemComponent,
    LoginPage,
    AccountsPage,
    TransactionsPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule.forRoot({
      mode: 'ios',
      backButtonText: 'Atrás',
      backButtonIcon: 'arrow-back',
      swipeBackEnabled: true,
      animated: true
    }),
    RouterModule.forRoot([
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      { path: 'login', component: LoginPage },
      { path: 'accounts', component: AccountsPage },
      { path: 'transactions', component: TransactionsPage },
      { path: 'transactions/:accountId', component: TransactionsPage },
      { path: '**', redirectTo: '/login' }
    ], {
      useHash: true,
      enableTracing: false
    })
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  exports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AccountCardComponent,
    TransactionItemComponent,
    LoginPage,
    AccountsPage,
    TransactionsPage
  ],
  bootstrap: []
})
export class AppModule {
  constructor() {
    console.log('AppModule inicializado');
  }
}