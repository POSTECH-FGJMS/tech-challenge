import CPF from '../valueobjects/CPF'
import Email from '../valueobjects/Email'
import IEntity from './IEntity'

export default class Client implements IEntity {
    id: string
    cpf: CPF
    name: string
    email: Email

    constructor(id: string, cpf: CPF, name: string, email: Email) {
        this.id = id
        this.cpf = cpf
        this.name = name
        this.email = email
    }
}
