import IValueObject from './IValueObject'

export default class Price implements IValueObject {
    value: string

    constructor(value: string) {
        this.value = value
    }
}
