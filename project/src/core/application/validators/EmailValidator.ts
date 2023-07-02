export interface EmailValidator {
    isValid(cpf: string): boolean
}

export class EmailValidatorImpl implements EmailValidator {
    public isValid(email: string): boolean {
        if (!this.hasValidFormat(email)) {
            return false
        }

        return true
    }

    private hasValidFormat(email: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailRegex.test(email)
    }
}
