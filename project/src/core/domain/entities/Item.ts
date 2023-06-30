import { Category } from '../valueObjects/Category'
import IEntity from './IEntity'
export interface Item {
    name: string
    description: string
    price: string
    category: Category
}

export type ItemEntity = Item & IEntity
