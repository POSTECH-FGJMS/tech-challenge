import { EmailValidatorImpl } from '../EmailValidator'

describe('EmailValidator', () => {
    const emailValidator = new EmailValidatorImpl()
    it('should return false if email is not valid', () => {
        const invalidEmail = 'invalid@email'
        expect(emailValidator.isValid(invalidEmail)).toBeFalsy()
    })

    it('should return true if email is valid', () => {
        const validEmail = 'valid@email.com'
        expect(emailValidator.isValid(validEmail)).toBeTruthy()
    })
})
