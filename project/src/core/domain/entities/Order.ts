import { Status } from '../valueObjects/Status'
import { Client } from './Client'
import IEntity from './IEntity'
import { Item } from './Item'

export interface Order {
    name: string
    description: string
    status: Status
    items: Item[]
    client: Client
}

export type OrderEntity = Order & IEntity
