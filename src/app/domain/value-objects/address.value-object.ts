/**
 * Value object para manejar direcciones de usuarios.
 * Aunque no es parte del lote, es requerida por User.entity.ts
 */
export class Address {
    public readonly street: string;
    public readonly city: string;
    public readonly state: string;
    public readonly postalCode: string;
    public readonly country: string;
    public readonly isPrimary: boolean;

    constructor(
        street: string,
        city: string,
        state: string,
        postalCode: string,
        country: string = 'Colombia',
        isPrimary: boolean = false
    ) {
        if (!street || !city || !state || !postalCode) {
            throw new Error('Todos los campos de dirección son obligatorios');
        }
        
        if (postalCode.length < 5) {
            throw new Error('Código postal inválido');
        }
        
        this.street = street;
        this.city = city;
        this.state = state;
        this.postalCode = postalCode;
        this.country = country;
        this.isPrimary = isPrimary;
    }

    public equals(other: Address): boolean {
        return this.street === other.street &&
               this.city === other.city &&
               this.state === other.state &&
               this.postalCode === other.postalCode &&
               this.country === other.country;
    }
}