import { Item, ItemEntity, ItemRead } from '../entities/Item'

export default interface ItemRepository {
    createItem(item: Item): Promise<ItemEntity>
    readItem(itemValues: ItemRead): Promise<ItemEntity[]>
}
