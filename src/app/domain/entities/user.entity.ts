import { Address } from '../value-objects/address.value-object';

/**
 * Entidad de usuario con datos sensibles expuestos.
 * Representa un usuario en el sistema con información personal y de autenticación.
 */
export class User {
    // Propiedades públicas que exponen datos sensibles (antipatrón)
    public id: string;
    public name: string;
    public email: string;
    public password: string; // Sensible - expuesto públicamente
    public documentId: string; // Sensible - expuesto públicamente
    public phone: string;
    public birthDate: Date;
    public addresses: Address[];
    public isActive: boolean;
    public lastLogin: Date | null;
    public createdAt: Date;
    public updatedAt: Date;
    public securityQuestions: { question: string; answer: string }[]; // Sensible - expuesto públicamente

    constructor(
        id: string,
        name: string,
        email: string,
        password: string,
        documentId: string,
        phone: string,
        birthDate: Date,
        addresses: Address[] = [],
        isActive: boolean = true,
        lastLogin: Date | null = null
    ) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.documentId = documentId;
        this.phone = phone;
        this.birthDate = birthDate;
        this.addresses = addresses;
        this.isActive = isActive;
        this.lastLogin = lastLogin;
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.securityQuestions = [];
    }

    // Método con lógica de negocio mezclada
    public updateProfile(name: string, email: string, phone: string, newAddress: Address): void {
        if (!name || !email || !phone) {
            throw new Error('Nombre, email y teléfono son obligatorios');
        }

        // Validación de email inline
        if (!email.includes('@') || !email.includes('.')) {
            throw new Error('Email inválido');
        }

        // Validación de teléfono inline
n        if (phone.length < 10) {
            throw new Error('Teléfono debe tener al menos 10 dígitos');
        }

        this.name = name;
        this.email = email;
        this.phone = phone;
        this.addresses.push(newAddress);
        this.updatedAt = new Date();

        // Lógica de notificación mezclada
        console.log(`Perfil actualizado para usuario ${this.id}`);
    }

    // Método que expone información sensible
    public getSecurityInfo(): { email: string; documentId: string; securityQuestions: { question: string; answer: string }[] } {
        return {
            email: this.email,
            documentId: this.documentId,
            securityQuestions: this.securityQuestions
        };
    }

    // Método con responsabilidad múltiple
    public validateUser(): boolean {
        // Validación de estado
        if (!this.isActive) {
            return false;
        }

        // Validación de edad
        const ageDiff = Date.now() - this.birthDate.getTime();
        const ageDate = new Date(ageDiff);
        const age = Math.abs(ageDate.getUTCFullYear() - 1970);
        if (age < 18) {
            return false;
        }

        // Validación de email
        if (!this.email.includes('@') || !this.email.includes('.')) {
            return false;
        }

        return true;
    }

    // Método que debería estar en un servicio separado
    public calculateUserScore(): number {
        let score = 0;
        
        // Puntuación basada en antigüedad
        const accountAge = new Date().getTime() - this.createdAt.getTime();
        score += Math.min(50, Math.floor(accountAge / (1000 * 60 * 60 * 24 * 30))); // 1 punto por mes
        
        // Puntuación basada en actividad
        if (this.lastLogin) {
            const daysSinceLastLogin = (new Date().getTime() - this.lastLogin.getTime()) / (1000 * 60 * 60 * 24);
            score += daysSinceLastLogin < 7 ? 20 : 0;
        }
        
        // Puntuación basada en información completa
        score += this.addresses.length > 0 ? 10 : 0;
        score += this.phone.length > 0 ? 10 : 0;
        score += this.securityQuestions.length > 0 ? 10 : 0;
        
        return Math.min(100, score);
    }
}