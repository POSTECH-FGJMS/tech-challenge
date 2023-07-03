import { Item, ItemEntity, ItemRead } from '../../domain/entities/Item'
import ItemUseCases from '../usecases/ItemUseCases'
import ItemRepository from '../../domain/repositories/ItemRepository'
import { isCategory } from '../../domain/valueObjects/Category'
import { BadRequestException } from '../../../adapter/driver/errors/exceptions/BadRequestException'

export class ItemUseCaseImpl implements ItemUseCases {
    constructor(private readonly repository: ItemRepository) {}

    public async postItem(item: Item) {
        const { category } = item

        if (category && !isCategory(category))
            throw new BadRequestException('Category is invalid')

        return await this.repository.createItem(item)
    }

    public async getItems(itemValues: ItemRead) {
        return await this.repository.readItems(itemValues)
    }

    public async updateItem(itemId: string, itemValues: Partial<ItemEntity>) {
        const { category } = itemValues

        if (category && !isCategory(category))
            throw new BadRequestException('Category is invalid')

        return await this.repository.updateItem(itemId, itemValues)
    }

    public async deleteItem(itemId: string) {
        return await this.repository.deleteItem(itemId)
    }
}
