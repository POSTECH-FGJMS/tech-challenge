export interface NameValidator {
    isValid(name: string): boolean
}

export class NameValidatorImpl implements NameValidator {
    public isValid(name: string): boolean {
        if (!this.hasValidCharacters(name)) {
          return false;
        }
    
        return true;
      }
    
      private hasValidCharacters(name: string): boolean {
        const specialCharsRegex = /[!@#$%^&*(),.?":{}|<>0-9]/;
        return !specialCharsRegex.test(name);
      }
  }