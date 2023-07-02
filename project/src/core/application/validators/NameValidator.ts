export interface NameValidator {
    isValid(name: string): boolean
}

export class NameValidatorImpl implements NameValidator {
    public isValid(name: string): boolean {
        return !!this.hasValidCharacters(name)
    }

    private hasValidCharacters(name: string): boolean {
        const specialCharsRegex = /[!@#$%^&*(),.?":{}|<>0-9]/
        return !specialCharsRegex.test(name)
    }
}
