import IValueObject from './IValueObject'

export default class Email implements IValueObject {
    value: string

    constructor(value: string) {
        this.value = value
    }
}
