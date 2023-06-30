import { Request, Response } from 'express'
import ItemUseCases from '../../../core/application/usecases/ItemUseCases'

export default class ItemController {
    constructor(private readonly itemUseCases: ItemUseCases) {}

    public async postItem(request: Request, response: Response) {
        const item = await this.itemUseCases.add({ ...request.body })
        response.json(item)
    }

    public async getAll(request: Request, response: Response) {
        const items = await this.itemUseCases.getAll()
        response.json(items)
    }
}
