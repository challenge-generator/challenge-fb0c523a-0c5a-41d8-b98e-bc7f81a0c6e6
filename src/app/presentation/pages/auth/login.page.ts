import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { AuthService } from '../../../domain/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class LoginPage {
  email: string = '';
  password: string = '';
  isLoading: boolean = false;
  errorMessage: string = '';

  constructor(
    private authService: AuthService,
    private navController: NavController,
    private alertController: AlertController
  ) {}

  async onLogin(): Promise<void> {
    if (!this.email || !this.password) {
      this.errorMessage = 'Por favor complete todos los campos';
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    try {
      const success = await this.authService.login(this.email, this.password);
      
      if (success) {
        this.navController.navigateForward('/accounts');
      } else {
        this.errorMessage = 'Credenciales incorrectas';
      }
    } catch (error) {
      this.errorMessage = 'Error al iniciar sesión. Intente de nuevo.';
      await this.showErrorAlert();
    } finally {
      this.isLoading = false;
    }
  }

  private async showErrorAlert(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'No se pudo conectar con el servidor. Verifique su conexión a internet.',
      buttons: ['Aceptar']
    });
    await alert.present();
  }

  goToRegister(): void {
    this.navController.navigateForward('/register');
  }

  onEmailChange(event: any): void {
    this.email = event.detail?.value || '';
  }

  onPasswordChange(event: any): void {
    this.password = event.detail?.value || '';
  }
}