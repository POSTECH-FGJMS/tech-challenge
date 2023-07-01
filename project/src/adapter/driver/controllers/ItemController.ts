import { Request, Response } from 'express'
import ItemUseCases from '../../../core/application/usecases/ItemUseCases'

export class ItemController {
    constructor(private readonly itemUseCases: ItemUseCases) {}

    public async getItems(request: Request, response: Response) {
        const items = await this.itemUseCases.getItems(request.query)
        response.json(items)
    }

    public async postItem(request: Request, response: Response) {
        const item = await this.itemUseCases.postItem(request.body)
        response.json(item)
    }

    public async patchItem(request: Request, response: Response) {
        const { id } = request.params
        await this.itemUseCases.updateItem(id, request.body)
        response.json()
    }

    public async deleteItem(request: Request, response: Response) {
        const { id } = request.params
        await this.itemUseCases.deleteItem(id)
        response.json()
    }
}
