import { Item, ItemEntity, ItemRead } from '../../domain/entities/Item'
import ItemUseCases from '../usecases/ItemUseCases'
import ItemRepository from '../../domain/repositories/ItemRepository'

export class ItemUseCaseImpl implements ItemUseCases {
    constructor(private readonly repository: ItemRepository) {}

    public async postItem(item: Item) {
        return await this.repository.createItem(item)
    }

    public async getItems(itemValues: ItemRead) {
        return await this.repository.readItems(itemValues)
    }

    public async updateItem(itemId: string, itemValues: Partial<ItemEntity>) {
        return await this.repository.updateItem(itemId, itemValues)
    }

    public async deleteItem(itemId: string) {
        return await this.repository.deleteItem(itemId)
    }
}
