import { Repository } from 'typeorm'
import ItemRepository from '../../../../core/domain/repositories/ItemRepository'
import { Item, ItemRead } from '../../../../core/domain/entities/Item'
import { ItemDBEntity } from '../dbEntities/ItemDBEntity'
import { AppDataSource } from '../orm/TypeOrm'
import { ID } from '../../../../core/domain/valueObjects/ID'

export default class ItemDBRepository implements ItemRepository {
    private readonly repository: Repository<ItemDBEntity>

    constructor() {
        this.repository = AppDataSource.getRepository(ItemDBEntity)
    }

    public async createItem(item: Item) {
        return await this.repository.save(item)
    }

    public async readItem(itemValues: ItemRead) {
        return await this.repository.find({ where: itemValues })
    }

    public async updateItem(itemId: ID, itemValues: ItemRead) {
        await this.repository.update(itemId, itemValues)
    }

    public async deleteItem(itemId: ID): Promise<void> {
        await this.repository.delete(itemId)
    }
}
