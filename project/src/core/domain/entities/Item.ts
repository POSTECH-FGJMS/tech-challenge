import { Category } from '../valueObjects/Category'
import IEntity from './IEntity'
export interface Item {
    name: string
    description: string
    price: number
    category: Category
}

export type ItemEntity = Item & IEntity
export type ItemRead = Partial<ItemEntity>
