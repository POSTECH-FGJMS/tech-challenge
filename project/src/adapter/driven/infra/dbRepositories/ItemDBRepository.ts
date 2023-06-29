import { Repository } from 'typeorm'
import ItemRepository from '../../../../core/application/dependencies/ItemRepository'
import { Item } from '../../../../core/domain/entities/Item'
import { ItemDBEntity } from '../dbEntities/ItemDBEntity'
import { AppDataSource } from '../orm/TypeOrm'

export default class ItemDBRepository implements ItemRepository {
    private readonly repository: Repository<ItemDBEntity>

    constructor() {
        this.repository = AppDataSource.getRepository(ItemDBEntity)
    }

    public async create(item: Item) {
        return await this.repository.save(item)
    }
}
