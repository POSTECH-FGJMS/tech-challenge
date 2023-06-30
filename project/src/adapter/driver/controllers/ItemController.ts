import { Request, Response } from 'express'
import ItemUseCases from '../../../core/application/usecases/ItemUseCases'
import { ItemRead } from '../../../core/domain/entities/Item'

export default class ItemController {
    constructor(private readonly itemUseCases: ItemUseCases) {}

    public async getItem(request: Request, response: Response) {
        const { id, name, description, price, category } = request.query
        const items = await this.itemUseCases.getItem({
            id,
            name,
            description,
            price,
            category,
        } as ItemRead)
        response.json(items)
    }

    public async postItem(request: Request, response: Response) {
        const item = await this.itemUseCases.postItem({ ...request.body })
        response.json(item)
    }
}
