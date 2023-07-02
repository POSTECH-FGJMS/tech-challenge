export interface EmailValidator {
    isValid(cpf: string): boolean
}

export class EmailValidatorImpl implements EmailValidator {
    public isValid(email: string): boolean {
        return !!this.hasValidFormat(email)
    }

    private hasValidFormat(email: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailRegex.test(email)
    }
}
