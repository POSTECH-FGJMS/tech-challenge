import { Category } from '../valueObjects/Category'
import Entity from './Entity'
export interface Item {
    name: string
    description: string
    price: number
    category: Category
}

export type ItemEntity = Item & Entity
export type ItemRead = Partial<ItemEntity>
