import { Status } from '../valueObjects/Status'
import { Client } from './Client'
import Entity from './Entity'
import { Item } from './Item'

export interface Order {
    status: Status
    items: Item[]
    client: Client
    createdAt?: Date
}

export type OrderEntity = Order & Entity
export type OrderRead = Partial<OrderEntity>
