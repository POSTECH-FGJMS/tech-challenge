import { Item, ItemEntity } from '../../domain/entities/Item'

export default interface ItemUseCases {
    add(item: Item): Promise<ItemEntity>
    getAll(): Promise<ItemEntity[]>
}
