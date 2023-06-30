import { Item, ItemEntity } from '../entities/Item'

export default interface ItemRepository {
    create(item: Item): Promise<ItemEntity>
    getAll(): Promise<ItemEntity[]>
}
