import { CpfValidatorImpl } from '../CpfValidator'

describe('CpfValidator', () => {
    const cpfValidator = new CpfValidatorImpl()
    it('should return false if cpf has more than 11 chars', () => {
        const invalidCpf = '1234567890123'
        expect(cpfValidator.isValid(invalidCpf)).toBeFalsy()
    })

    it('should return false if cpf is invalid', () => {
        const invalidCpf = '11111111111'
        expect(cpfValidator.isValid(invalidCpf)).toBeFalsy()
    })

    it('should return true if cpf is valid', () => {
        const validCpf = '76226013060'
        expect(cpfValidator.isValid(validCpf)).toBeTruthy()
    })
})
