import IEntity from './IEntity'

export default class Client implements IEntity {
    id: string
    cpf?: string
    name?: string
    email?: string

    constructor(
        id: string,
        cpf: string | undefined,
        name: string | undefined,
        email: string | undefined
    ) {
        this.id = id
        this.cpf = cpf
        this.name = name
        this.email = email
    }
}
