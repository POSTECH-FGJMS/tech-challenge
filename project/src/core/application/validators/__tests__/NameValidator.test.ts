import { NameValidatorImpl } from '../NameValidator'

describe('NameValidator', () => {
    const nameValidator = new NameValidatorImpl()
    it('should return false if name contains special characters', () => {
        const invalidName = 'P&dr@ ?'

        expect(nameValidator.isValid(invalidName)).toBeFalsy()
    })

    it('should return true if name is valid', () => {
        const validName = 'Pedro Henrique'

        expect(nameValidator.isValid(validName)).toBeTruthy()
    })
})
