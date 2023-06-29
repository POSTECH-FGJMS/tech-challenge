import { Request } from 'express'
import ItemUseCases from '../../../core/application/usecases/ItemUseCases'

export default class ItemController {
    constructor(private readonly itemUseCases: ItemUseCases) {}

    public async postItem(request: Request) {
        return await this.itemUseCases.add({ ...request.body })
    }
}
