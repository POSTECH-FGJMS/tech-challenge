import { Item, ItemEntity } from '../../domain/entities/Item'

export default interface ItemRepository {
    create(item: Item): Promise<ItemEntity>
}
