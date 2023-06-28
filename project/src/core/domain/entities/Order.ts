import IEntity from './IEntity'

export default class Order implements IEntity {
    id: string
    name: string
    description: string
    price: string
    status: string
    clientId: number

    constructor(
        id: string,
        name: string,
        description: string,
        price: string,
        status: string,
        clientId: number
    ) {
        this.id = id
        this.name = name
        this.description = description
        this.price = price
        this.status = status
        this.clientId = clientId
    }
}
