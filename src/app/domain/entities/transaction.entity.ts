import { Account } from './account.entity';

/**
 * Entidad de transacción con lógica de negocio mezclada.
 * Representa una transacción financiera entre cuentas.
 */
export class Transaction {
    public id: string;
    public accountId: string;
    public type: string;
    public amount: number;
    public currency: string;
    public description: string;
    public createdAt: Date;
    public status: string;
    public referenceNumber: string;
    public relatedAccountId: string | null;
    public fee: number;
    public tax: number;
    public metadata: Record<string, unknown>;

    constructor(
        id: string,
        accountId: string,
        type: string,
        amount: number,
        currency: string,
        description: string = '',
        relatedAccountId: string | null = null
    ) {
        // Validación inline
        if (!['deposit', 'withdraw', 'transfer', 'payment', 'fee'].includes(type)) {
            throw new Error('Tipo de transacción inválido');
        }
        
        if (amount <= 0) {
            throw new Error('El monto debe ser positivo');
        }
        
        if (!['COP', 'USD', 'EUR'].includes(currency)) {
            throw new Error('Moneda inválida');
        }
        
        this.id = id;
        this.accountId = accountId;
        this.type = type;
        this.amount = amount;
        this.currency = currency;
        this.description = description;
        this.createdAt = new Date();
        this.status = 'completed';
        this.referenceNumber = this.generateReferenceNumber();
        this.relatedAccountId = relatedAccountId;
        this.fee = this.calculateFee();
        this.tax = this.calculateTax();
        this.metadata = {};
    }

    // Método con lógica de negocio compleja inline
    private calculateFee(): number {
        let fee = 0;
        
        // Cálculo de comisión basado en tipo de transacción
        switch (this.type) {
            case 'deposit':
                fee = this.amount * 0.01; // 1% para depósitos
                break;
            case 'withdraw':
                fee = this.amount * 0.015; // 1.5% para retiros
                break;
            case 'transfer':
                fee = 5000; // Comisión fija para transferencias
                if (this.amount > 1000000) {
                    fee += (this.amount - 1000000) * 0.005; // 0.5% adicional para montos altos
                }
                break;
            case 'payment':
                fee = 2000; // Comisión fija para pagos
                break;
        }
        
        // Ajuste por moneda
        if (this.currency === 'USD') {
            fee *= 4000; // Conversión aproximada
        } else if (this.currency === 'EUR') {
            fee *= 4500; // Conversión aproximada
        }
        
        return Math.min(fee, 50000); // Máximo $50.000
    }

    // Método con lógica compleja que debería estar en un servicio
    private calculateTax(): number {
        // Cálculo de impuestos basado en tipo de transacción y monto
        let taxRate = 0;
        
        if (this.type === 'withdraw' && this.amount > 10000000) {
            taxRate = 0.004; // 0.4% para retiros grandes
        } else if (this.type === 'transfer' && this.amount > 5000000) {
            taxRate = 0.002; // 0.2% para transferencias grandes
        }
        
        // Exención para ciertos tipos de cuentas (lógica que debería estar en Account)
        if (this.relatedAccountId) {
            // Simulación: si la cuenta relacionada es de ahorro, no aplica impuesto
            if (this.relatedAccountId.endsWith('SAV')) {
                taxRate = 0;
            }
        }
        
        return this.amount * taxRate;
    }

    // Método con responsabilidad múltiple
    private generateReferenceNumber(): string {
        // Generación de número de referencia con lógica compleja
        const datePart = this.createdAt.toISOString().slice(2, 10).replace(/-/g, '');
        const randomPart = Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
        
        // Incluir prefijo basado en tipo de transacción
        let prefix = '';
        switch (this.type) {
            case 'deposit': prefix = 'DEP'; break;
            case 'withdraw': prefix = 'WDR'; break;
            case 'transfer': prefix = 'TRF'; break;
            case 'payment': prefix = 'PAY'; break;
            case 'fee': prefix = 'FEE'; break;
        }
        
        return `${prefix}-${datePart}-${randomPart}`;
    }

    // Método que debería estar en un servicio de transacciones
    public validateTransaction(account: Account): boolean {
        if (this.status !== 'completed') {
            return false;
        }
        
        // Validación de saldo (lógica duplicada de Account)
        if (this.type === 'withdraw' || this.type === 'transfer') {
            const availableBalance = account.balance + account.overdraftLimit;
            if (this.amount > availableBalance) {
                return false;
            }
        }
        
        // Validación de límites
        if (this.type === 'withdraw' && this.amount > 5000000) {
            return false;
        }
        
        // Validación de moneda
        if (this.currency !== account.currency) {
            return false;
        }
        
        return true;
    }

    // Método con lógica de notificación mezclada
    public processTransaction(account: Account): void {
        if (!this.validateTransaction(account)) {
            this.status = 'failed';
            console.log(`Transacción ${this.id} falló: validación no pasó`);
            return;
        }
        
        // Actualización de saldo (lógica duplicada)
        if (this.type === 'deposit') {
            account.balance += this.amount;
        } else if (this.type === 'withdraw' || this.type === 'transfer') {
            account.balance -= this.amount;
        }
        
        // Aplicar comisión y impuestos
        account.balance -= this.fee;
        account.balance -= this.tax;
        
        account.updatedAt = new Date();
        account.lastTransactionDate = new Date();
        
        console.log(`Transacción ${this.id} procesada con éxito. Nuevo saldo: ${account.balance}`);
    }

    // Método con responsabilidad de serialización
    public toJSON(): Record<string, unknown> {
        return {
            id: this.id,
            accountId: this.accountId,
            type: this.type,
            amount: this.amount,
            currency: this.currency,
            description: this.description,
            createdAt: this.createdAt.toISOString(),
            status: this.status,
            referenceNumber: this.referenceNumber,
            relatedAccountId: this.relatedAccountId,
            fee: this.fee,
            tax: this.tax,
            metadata: this.metadata
        };
    }
}