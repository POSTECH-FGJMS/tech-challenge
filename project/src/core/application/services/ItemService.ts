import { Item, ItemEntity } from '../../domain/entities/Item'
import ItemUseCases from '../usecases/ItemUseCases'
import ItemRepository from '../../domain/repositories/ItemRepository'

export default class ItemService implements ItemUseCases {
    constructor(private readonly repository: ItemRepository) {}

    public async add(item: Item) {
        return await this.repository.create(item)
    }

    public async getAll(): Promise<ItemEntity[]> {
        return await this.repository.getAll()
    }
}
