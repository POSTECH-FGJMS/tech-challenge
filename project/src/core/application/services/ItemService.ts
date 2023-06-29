import Item from '../../domain/entities/Item'
import ItemUseCases from '../usecases/ItemUseCases'
import ItemRepository from '../dependencies/ItemRepository'

export default class ItemService implements ItemUseCases {
    constructor(private readonly repository: ItemRepository) {}

    public async add(item: Omit<Item, 'id'>) {
        return await this.repository.create(item)
    }
}
