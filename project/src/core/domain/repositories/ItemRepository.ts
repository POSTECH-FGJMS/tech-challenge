import { Item, ItemEntity, ItemRead } from '../entities/Item'
import { ID } from '../valueObjects/ID'

export default interface ItemRepository {
    createItem(item: Item): Promise<ItemEntity>
    readItems(itemValues: ItemRead): Promise<ItemEntity[]>
    updateItem(itemId: ID, itemValues: ItemRead): Promise<void>
    deleteItem(itemId: ID): Promise<void>
}
