import { Component, OnInit, OnDestroy } from '@angular/core';
import { Platform, AlertController, MenuController } from '@ionic/angular';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription, filter } from 'rxjs';
import { AuthService } from './domain/services/auth.service';
import { AccountService } from './domain/services/account.service';

@Component({
  selector: 'app-root',
  template: `
    <ion-app>
      <ion-menu *ngIf="isAuthenticated" content-id="main-content" type="overlay">
        <ion-header>
          <ion-toolbar color="primary">
            <ion-title>FinTech App</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content>
          <ion-list>
            <ion-menu-toggle auto-hide="false">
              <ion-item button (click)="navigateTo('/accounts')">
                <ion-icon slot="start" name="wallet"></ion-icon>
                <ion-label>Cuentas</ion-label>
              </ion-item>
            </ion-menu-toggle>
            <ion-menu-toggle auto-hide="false">
              <ion-item button (click)="navigateTo('/transactions')">
                <ion-icon slot="start" name="swap-horizontal"></ion-icon>
                <ion-label>Transacciones</ion-label>
              </ion-item>
            </ion-menu-toggle>
            <ion-menu-toggle auto-hide="false">
              <ion-item button (click)="logout()">
                <ion-icon slot="start" name="log-out"></ion-icon>
                <ion-label>Cerrar Sesión</ion-label>
              </ion-item>
            </ion-menu-toggle>
          </ion-list>
        </ion-content>
      </ion-menu>
      
      <div class="ion-page" id="main-content">
        <ion-header *ngIf="showHeader">
          <ion-toolbar>
            <ion-buttons slot="start">
              <ion-menu-button *ngIf="isAuthenticated"></ion-menu-button>
            </ion-buttons>
            <ion-title>{{ pageTitle }}</ion-title>
            <ion-buttons slot="end">
              <ion-button (click)="refreshData()" *ngIf="isAuthenticated">
                <ion-icon slot="icon-only" name="refresh"></ion-icon>
              </ion-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>
        <ion-content>
          <ion-router-outlet></ion-router-outlet>
        </ion-content>
      </div>
    </ion-app>
  `,
  styles: [`
    :host {
      display: block;
      height: 100%;
    }
    ion-menu {
      --width: 280px;
    }
    .ion-page {
      height: 100%;
    }
    ion-content {
      --background: var(--ion-background-color, #f8f9fa);
    }
  `]
})
export class AppComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  showHeader = true;
  pageTitle = 'FinTech';
  
  private routerSubscription?: Subscription;
  private authSubscription?: Subscription;

  constructor(
    private platform: Platform,
    private router: Router,
    private alertController: AlertController,
    private menuController: MenuController,
    private authService: AuthService,
    private accountService: AccountService
  ) {
    this.initializeApp();
  }

  private initializeApp(): void {
    this.platform.ready().then(() => {
      this.setupStatusBar();
      this.setupBackButtonHandler();
      this.checkAuthenticationStatus();
    });
  }

  private setupStatusBar(): void {
    if (this.platform.is('android')) {
      this.platform.backButton.subscribeWithPriority(10, () => {
        this.handleBackButton();
      });
    }
  }

  private setupBackButtonHandler(): void {
    document.addEventListener('ionBackButton', (event: Event) => {
      const customEvent = event as CustomEvent;
      customEvent.detail.register(10, () => {
        this.handleBackButton();
      });
    });
  }

  private handleBackButton(): void {
    const url = this.router.url;
    if (url === '/login' || url === '/') {
      this.showExitConfirmation();
    } else {
      this.router.navigate(['/accounts']);
    }
  }

  private async showExitConfirmation(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Salir',
      message: '¿Desea salir de la aplicación?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Salir',
          handler: () => {
            navigator['app'].exitApp();
          }
        }
      ]
    });
    await alert.present();
  }

  private checkAuthenticationStatus(): void {
    this.authSubscription = this.authService.isAuthenticated$.subscribe(
      authenticated => {
        this.isAuthenticated = authenticated;
        if (!authenticated) {
          this.router.navigate(['/login']);
        }
      }
    );
  }

  ngOnInit(): void {
    this.setupRouteTracking();
    this.loadInitialData();
  }

  private setupRouteTracking(): void {
    this.routerSubscription = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event) => {
      const navigationEnd = event as NavigationEnd;
      this.updatePageTitle(navigationEnd.urlAfterRedirects);
      this.updateHeaderVisibility(navigationEnd.urlAfterRedirects);
    });
  }

  private updatePageTitle(url: string): void {
    if (url.includes('/accounts')) {
      this.pageTitle = 'Mis Cuentas';
    } else if (url.includes('/transactions')) {
      this.pageTitle = 'Transacciones';
    } else if (url.includes('/login')) {
      this.pageTitle = 'Iniciar Sesión';
    } else {
      this.pageTitle = 'FinTech';
    }
  }

  private updateHeaderVisibility(url: string): void {
    this.showHeader = !url.includes('/login') && this.isAuthenticated;
  }

  private loadInitialData(): void {
    if (this.isAuthenticated) {
      this.accountService.loadAccounts().subscribe({
        error: (error) => console.error('Error loading accounts:', error)
      });
    }
  }

  navigateTo(path: string): void {
    this.menuController.close();
    this.router.navigate([path]);
  }

  async logout(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Cerrar Sesión',
      message: '¿Está seguro que desea cerrar sesión?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Cerrar Sesión',
          handler: () => {
            this.authService.logout();
            this.menuController.close();
          }
        }
      ]
    });
    await alert.present();
  }

  refreshData(): void {
    this.accountService.loadAccounts().subscribe({
      next: () => {
        this.showRefreshNotification();
      },
      error: (error) => {
        console.error('Error refreshing data:', error);
        this.showErrorNotification();
      }
    });
  }

  private async showRefreshNotification(): Promise<void> {
    const toast = await this.alertController.create({
      message: 'Datos actualizados correctamente',
      duration: 2000,
      position: 'bottom',
      color: 'success'
    });
    await toast.present();
  }

  private async showErrorNotification(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'No se pudieron actualizar los datos. Intente nuevamente.',
      buttons: ['Aceptar']
    });
    await alert.present();
  }

  ngOnDestroy(): void {
    this.routerSubscription?.unsubscribe();
    this.authSubscription?.unsubscribe();
  }
}