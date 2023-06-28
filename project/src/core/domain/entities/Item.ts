import IEntity from './IEntity'

export default class Item implements IEntity {
    id: string
    name: string
    description: string
    price: string
    category: string
    orderId: string

    constructor(
        id: string,
        name: string,
        description: string,
        price: string,
        category: string,
        orderId: string
    ) {
        this.id = id
        this.name = name
        this.description = description
        this.price = price
        this.category = category
        this.orderId = orderId
    }
}
