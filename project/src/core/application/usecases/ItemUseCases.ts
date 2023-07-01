import { Item, ItemEntity, ItemRead } from '../../domain/entities/Item'
import { ID } from '../../domain/valueObjects/ID'

export default interface ItemUseCases {
    postItem(item: Item): Promise<ItemEntity>
    getItems(itemValues: ItemRead): Promise<ItemEntity[]>
    updateItem(itemId: ID, itemValues: ItemRead): Promise<void>
    deleteItem(itemId: ID): Promise<void>
}
