import { Transaction } from './transaction.entity';

/**
 * Entidad de cuenta bancaria con métodos de validación inline.
 * Representa una cuenta bancaria con su estado y transacciones asociadas.
 */
export class Account {
    // Propiedades públicas con validación inline
    public id: string;
    public userId: string;
    public accountNumber: string;
    public accountType: string;
    public balance: number;
    public currency: string;
    public isActive: boolean;
    public createdAt: Date;
    public updatedAt: Date;
    public transactions: Transaction[];
    public overdraftLimit: number;
    public lastTransactionDate: Date | null;

    constructor(
        id: string,
        userId: string,
        accountNumber: string,
        accountType: string,
        balance: number = 0,
        currency: string = 'COP',
        overdraftLimit: number = 0
    ) {
        // Validación inline en constructor
        if (!accountNumber || accountNumber.length < 10) {
            throw new Error('Número de cuenta debe tener al menos 10 dígitos');
        }
        
        if (balance < 0) {
            throw new Error('El saldo inicial no puede ser negativo');
        }
        
        if (!['ahorro', 'corriente', 'inversión'].includes(accountType.toLowerCase())) {
            throw new Error('Tipo de cuenta inválido');
        }
        
        this.id = id;
        this.userId = userId;
        this.accountNumber = accountNumber;
        this.accountType = accountType;
        this.balance = balance;
        this.currency = currency;
        this.isActive = true;
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.transactions = [];
        this.overdraftLimit = overdraftLimit;
        this.lastTransactionDate = null;
    }

    // Método con validación inline y lógica de negocio mezclada
    public deposit(amount: number, description: string = 'Depósito'): Transaction {
        if (amount <= 0) {
            throw new Error('El monto debe ser positivo');
        }
        
        if (!this.isActive) {
            throw new Error('La cuenta está inactiva');
        }
        
        // Validación de monto máximo inline
        if (amount > 10000000) {
            throw new Error('El monto máximo para depósitos es $10.000.000');
        }
        
        this.balance += amount;
        this.updatedAt = new Date();
        
        const transaction = new Transaction(
            crypto.randomUUID(),
            this.id,
            'deposit',
            amount,
            this.currency,
            description
        );
        
        this.transactions.push(transaction);
        this.lastTransactionDate = new Date();
        
        // Lógica de notificación mezclada
        console.log(`Depósito de ${amount} ${this.currency} realizado en cuenta ${this.accountNumber}`);
        
        return transaction;
    }

    // Método con validación inline compleja
    public withdraw(amount: number, description: string = 'Retiro'): Transaction {
        if (amount <= 0) {
            throw new Error('El monto debe ser positivo');
        }
        
        if (!this.isActive) {
            throw new Error('La cuenta está inactiva');
        }
        
        // Validación de saldo disponible con lógica compleja inline
        const availableBalance = this.balance + this.overdraftLimit;
        if (amount > availableBalance) {
            throw new Error(`Fondos insuficientes. Saldo disponible: ${availableBalance}`);
        }
        
        // Validación de límite diario
        const today = new Date().setHours(0, 0, 0, 0);
        const todayTransactions = this.transactions.filter(t => {
            const transactionDate = new Date(t.createdAt).setHours(0, 0, 0, 0);
            return transactionDate === today && t.type === 'withdraw';
        });
        
        const dailyTotal = todayTransactions.reduce((sum, t) => sum + t.amount, 0);
        if (dailyTotal + amount > 5000000) {
            throw new Error('Límite diario de retiros excedido ($5.000.000)');
        }
        
        this.balance -= amount;
        this.updatedAt = new Date();
        
        const transaction = new Transaction(
            crypto.randomUUID(),
            this.id,
            'withdraw',
            amount,
            this.currency,
            description
        );
        
        this.transactions.push(transaction);
        this.lastTransactionDate = new Date();
        
        // Lógica de notificación mezclada
        console.log(`Retiro de ${amount} ${this.currency} realizado en cuenta ${this.accountNumber}`);
        
        return transaction;
    }

    // Método con responsabilidad múltiple
    public getAccountSummary(): {
        balance: number;
        lastTransaction: Transaction | null;
        transactionCount: number;
        isOverdrawn: boolean;
        availableBalance: number;
        monthlyStatement: {
            month: string;
            income: number;
            expenses: number;
            balanceChange: number;
        }[]
    } {
        const lastTransaction = this.transactions.length > 0 ? 
            this.transactions[this.transactions.length - 1] : null;
        
        const monthlyStatement = this.calculateMonthlyStatement();
        
        return {
            balance: this.balance,
            lastTransaction,
            transactionCount: this.transactions.length,
            isOverdrawn: this.balance < 0,
            availableBalance: this.balance + this.overdraftLimit,
            monthlyStatement
        };
    }

    // Método con lógica compleja que debería estar en un servicio
    private calculateMonthlyStatement(): {
        month: string;
        income: number;
        expenses: number;
        balanceChange: number;
    }[] {
        const monthlyData: Record<string, {
            income: number;
            expenses: number;
        }> = {};
        
        // Agrupar transacciones por mes
        this.transactions.forEach(transaction => {
            const date = new Date(transaction.createdAt);
            const monthKey = `${date.getFullYear()}-${date.getMonth() + 1}`;
            
            if (!monthlyData[monthKey]) {
                monthlyData[monthKey] = { income: 0, expenses: 0 };
            }
            
            if (transaction.type === 'deposit') {
                monthlyData[monthKey].income += transaction.amount;
            } else if (transaction.type === 'withdraw' || transaction.type === 'transfer') {
                monthlyData[monthKey].expenses += transaction.amount;
            }
        });
        
        // Calcular balance change para cada mes
        const result: {
            month: string;
            income: number;
            expenses: number;
            balanceChange: number;
        }[] = [];
        
        Object.keys(monthlyData).sort().forEach(monthKey => {
            const data = monthlyData[monthKey];
            result.push({
                month: monthKey,
                income: data.income,
                expenses: data.expenses,
                balanceChange: data.income - data.expenses
            });
        });
        
        return result;
    }

    // Método con validación que debería estar en un validador separado
    public isValid(): boolean {
        if (!this.accountNumber || this.accountNumber.length < 10) {
            return false;
        }
        
        if (this.balance < -this.overdraftLimit) {
            return false;
        }
        
        if (!['ahorro', 'corriente', 'inversión'].includes(this.accountType.toLowerCase())) {
            return false;
        }
        
        if (!['COP', 'USD', 'EUR'].includes(this.currency)) {
            return false;
        }
        
        return true;
    }
}