export interface CpfValidator {
    isValid(cpf: string): boolean
}

export class CpfValidatorImpl implements CpfValidator {
    public isValid(cpf: string): boolean {
      if (cpf.length !== 11) {
        return false;
      }
  
      if (!this.hasValidDigits(cpf)) {
        return false;
      }
  
      return true;
    }
  
    private hasValidDigits(cpf: string): boolean {
      const digits = cpf.replace(/\D/g, '');
  
      if (digits.length !== 11) {
        return false;
      }
  
      const repeatedDigitsRegex = /^(\d)\1{10}$/;
      if (repeatedDigitsRegex.test(digits)) {
        return false;
      }
  
      const cpfDigits = digits.substr(0, 9);
      const verifierDigit1 = this.calculateVerifierDigit(cpfDigits, 10);
      const verifierDigit2 = this.calculateVerifierDigit(cpfDigits + verifierDigit1, 11);
  
      return cpfDigits + verifierDigit1 + verifierDigit2 === digits;
    }
  
    private calculateVerifierDigit(digits: string, modulus: number): string {
      let sum = 0;
      for (let i = 0; i < digits.length; i++) {
        sum += parseInt(digits.charAt(i)) * (modulus - i);
      }
  
      const remainder = sum % 11;
      return remainder < 2 ? '0' : (11 - remainder).toString();
    }
  
  }