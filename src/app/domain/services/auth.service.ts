import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../entities/user.entity';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  login(email: string, password: string): Observable<User> {
    throw new Error('Method not implemented');
  }

  logout(): Observable<void> {
    throw new Error('Method not implemented');
  }

  register(userData: { name: string; email: string; phone: string; birthDate: Date }, password: string): Observable<User> {
    throw new Error('Method not implemented');
  }

  resetPassword(email: string): Observable<void> {
    throw new Error('Method not implemented');
  }

  verifyToken(token: string): Observable<boolean> {
    throw new Error('Method not implemented');
  }

  refreshToken(refreshToken: string): Observable<{ accessToken: string; refreshToken: string }> {
    throw new Error('Method not implemented');
  }

  getCurrentUser(): Observable<User | null> {
    throw new Error('Method not implemented');
  }
}