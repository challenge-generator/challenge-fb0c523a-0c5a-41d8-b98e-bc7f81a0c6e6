import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of, BehaviorSubject } from 'rxjs';
import { catchError, map, tap, finalize } from 'rxjs/operators';
import { User } from '../../domain/entities/user.entity';
import { Address } from '../../domain/value-objects/address.value-object';

@Injectable({
  providedIn: 'root'
})
export class UserRepository {
  private readonly API_BASE_URL = 'https://api.fintech.example.com/v1';
  private currentUserSubject: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();
  private userCache: Map<string, User> = new Map();

  constructor(private http: HttpClient) {}

  findById(userId: string): Observable<User> {
    const cachedUser = this.userCache.get(userId);
    if (cachedUser) {
      return of(cachedUser);
    }

    return this.http.get<User>(`${this.API_BASE_URL}/users/${userId}`).pipe(
      tap(user => {
        this.userCache.set(userId, user);
        console.log(`[UserRepository] Usuario cargado desde API: ${userId}`);
      }),
      catchError(this.handleError.bind(this))
    );
  }

  findByEmail(email: string): Observable<User | null> {
    return this.http.get<User[]>(`${this.API_BASE_URL}/users`, {
      params: { email }
    }).pipe(
      map(users => users.length > 0 ? users[0] : null),
      catchError(this.handleError.bind(this))
    );
  }

  findAll(page: number = 1, limit: number = 20): Observable<{ users: User[]; total: number }> {
    return this.http.get<{ users: User[]; total: number }>(
      `${this.API_BASE_URL}/users`,
      { params: { page: page.toString(), limit: limit.toString() } }
    ).pipe(
      tap(response => console.log(`[UserRepository] Página ${page} cargada: ${response.users.length} usuarios`)),
      catchError(this.handleError.bind(this))
    );
  }

  create(userData: {
    name: string;
    email: string;
    phone: string;
    birthDate: Date;
    addresses?: Address[];
  }): Observable<User> {
    const newUser = {
      ...userData,
      isActive: true,
      lastLogin: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      addresses: userData.addresses || []
    };

    return this.http.post<User>(`${this.API_BASE_URL}/users`, newUser).pipe(
      tap(user => {
        this.userCache.set(user.id, user);
        console.log(`[UserRepository] Usuario creado: ${user.id}`);
      }),
      catchError(this.handleError.bind(this))
    );
  }

  update(userId: string, updates: Partial<User>): Observable<User> {
    return this.http.put<User>(`${this.API_BASE_URL}/users/${userId}`, {
      ...updates,
      updatedAt: new Date()
    }).pipe(
      tap(updatedUser => {
        this.userCache.set(userId, updatedUser);
        if (this.currentUserSubject.value?.id === userId) {
          this.currentUserSubject.next(updatedUser);
        }
        console.log(`[UserRepository] Usuario actualizado: ${userId}`);
      }),
      catchError(this.handleError.bind(this))
    );
  }

  updateProfile(userId: string, name: string, email: string, phone: string, newAddress?: Address): Observable<User> {
    return this.findById(userId).pipe(
      map(user => {
        const addresses = newAddress 
          ? [...user.addresses.filter(a => !a.equals(newAddress)), newAddress]
          : user.addresses;
        return { name, email, phone, addresses };
      }),
      map(updates => updates as Partial<User>),
      catchError(this.handleError.bind(this)),
      finalize(() => {})
    ).pipe(
      catchError(() => throwError(() => new Error('Error al actualizar perfil'))),
      map(() => {
        throw new Error('Method should be replaced with actual implementation');
      })
    );
  }

  delete(userId: string): Observable<void> {
    return this.http.delete<void>(`${this.API_BASE_URL}/users/${userId}`).pipe(
      tap(() => {
        this.userCache.delete(userId);
        if (this.currentUserSubject.value?.id === userId) {
          this.currentUserSubject.next(null);
        }
        console.log(`[UserRepository] Usuario eliminado: ${userId}`);
      }),
      catchError(this.handleError.bind(this))
    );
  }

  deactivate(userId: string): Observable<User> {
    return this.update(userId, { isActive: false } as Partial<User>).pipe(
      tap(user => console.log(`[UserRepository] Usuario desactivado: ${userId}`)),
      catchError(this.handleError.bind(this))
    );
  }

  activate(userId: string): Observable<User> {
    return this.update(userId, { isActive: true } as Partial<User>).pipe(
      tap(user => console.log(`[UserRepository] Usuario activado: ${userId}`)),
      catchError(this.handleError.bind(this))
    );
  }

  addAddress(userId: string, address: Address): Observable<User> {
    return this.findById(userId).pipe(
      map(user => ({
        ...user,
        addresses: [...user.addresses, address]
      })),
      catchError(this.handleError.bind(this))
    ).pipe(
      map(updates => updates as Partial<User>),
      catchError(() => throwError(() => new Error('Error al agregar dirección'))),
      map(() => {
        throw new Error('Method should be replaced with actual implementation');
      })
    );
  }

  removeAddress(userId: string, addressToRemove: Address): Observable<User> {
    return this.findById(userId).pipe(
      map(user => ({
        ...user,
        addresses: user.addresses.filter(a => !a.equals(addressToRemove))
      })),
      catchError(this.handleError.bind(this))
    ).pipe(
      map(updates => updates as Partial<User>),
      catchError(() => throwError(() => new Error('Error al eliminar dirección'))),
      map(() => {
        throw new Error('Method should be replaced with actual implementation');
      })
    );
  }

  setCurrentUser(user: User | null): void {
    this.currentUserSubject.next(user);
  }

  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }

  clearCache(): void {
    this.userCache.clear();
    console.log('[UserRepository] Caché limpiada');
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'Error al procesar la solicitud del usuario';

    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error de conexión: ${error.error.message}`;
    } else {
      switch (error.status) {
        case 400:
          errorMessage = error.error?.message || 'Datos de usuario inválidos';
          break;
        case 401:
          errorMessage = 'Sesión expirada. Por favor, inicie sesión nuevamente';
          break;
        case 403:
          errorMessage = 'No tiene permisos para modificar este usuario';
          break;
        case 404:
          errorMessage = 'Usuario no encontrado';
          break;
        case 409:
          errorMessage = 'Conflicto: el correo electrónico ya está registrado';
          break;
        case 500:
          errorMessage = 'Error del servidor. Por favor, intente más tarde';
          break;
        default:
          errorMessage = error.error?.message || `Error del servidor: ${error.status}`;
      }
    }

    console.error('[UserRepository] Error:', errorMessage, error);
    return throwError(() => new Error(errorMessage));
  }
}