import IEntity from './IEntity'
export interface Item {
    name: string
    description: string
    price: string
    category: string
    orderId: string
}

export type ItemEntity = Item & IEntity
