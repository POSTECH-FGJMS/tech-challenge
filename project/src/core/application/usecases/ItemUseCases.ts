import { Item, ItemEntity, ItemRead } from '../../domain/entities/Item'

export default interface ItemUseCases {
    postItem(item: Item): Promise<ItemEntity>
    getItem(itemValues: ItemRead): Promise<ItemEntity[]>
}
