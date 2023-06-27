import Category from '../valueobjects/Category'
import Price from '../valueobjects/Price'
import IEntity from './IEntity'

export default class Item implements IEntity {
    id: number
    name: string
    description: string
    price: Price
    category: Category
    orderId: string

    constructor(
        id: number,
        name: string,
        description: string,
        price: Price,
        category: Category,
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
