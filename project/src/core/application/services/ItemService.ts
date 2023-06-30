import { Item, ItemEntity, ItemRead } from '../../domain/entities/Item'
import ItemUseCases from '../usecases/ItemUseCases'
import ItemRepository from '../../domain/repositories/ItemRepository'

export default class ItemService implements ItemUseCases {
    constructor(private readonly repository: ItemRepository) {}

    public async postItem(item: Item) {
        return await this.repository.createItem(item)
    }

    public async getItem(itemValues: ItemRead): Promise<ItemEntity[]> {
        return await this.repository.readItem(itemValues)
    }

    public async updateItem(itemId: string, itemValues: Partial<ItemEntity>) {
        return await this.repository.updateItem(itemId, itemValues)
    }
}
