import { Observable } from 'rxjs';
import { User } from '../entities/user.entity';
import { Address } from '../value-objects/address.value-object';

export interface UserFilter {
  isActive?: boolean;
  name?: string;
  email?: string;
}

export interface UserRepository {
  findAll(): Observable<User[]>;
  findById(id: string): Observable<User | null>;
  findByEmail(email: string): Observable<User | null>;
  findByPhone(phone: string): Observable<User | null>;
  search(filter: UserFilter): Observable<User[]>;
  save(user: User): Observable<User>;
  update(id: string, userData: Partial<User>): Observable<User>;
  delete(id: string): Observable<boolean>;
  updateProfile(id: string, name: string, email: string, phone: string, addresses?: Address[]): Observable<User>;
  validateUserCredentials(email: string, password: string): Observable<User | null>;
  updateLastLogin(id: string): Observable<User>;
  deactivateUser(id: string): Observable<User>;
  activateUser(id: string): Observable<User>;
  getActiveUsers(): Observable<User[]>;
  getInactiveUsers(): Observable<User[]>;
  countUsers(): Observable<number>;
  existsByEmail(email: string): Observable<boolean>;
  existsByPhone(phone: string): Observable<boolean>;
}