import { Request, Response } from 'express'
import OrderUseCases from '../../../core/application/usecases/OrderUseCases'
import { OrderRead } from '../../../core/domain/entities/Order'
import { PostOrderRequest } from './requests/PostOrderRequest'
import { PatchOrderRequest } from './requests/PatchOrderRequest'

export class OrderController {
    constructor(private readonly orderUseCases: OrderUseCases) {}

    public async postOrder(request: Request, response: Response) {
        const orderToPost = new PostOrderRequest(request.body).toOrder()
        const order = await this.orderUseCases.postOrder(orderToPost)
        response.json(order)
    }

    public async getOrder(request: Request, response: Response) {
        const orders = await this.orderUseCases.getOrders(
            request.query as OrderRead
        )
        response.json(orders)
    }

    public async patchOrder(request: Request, response: Response) {
        const { id } = request.params
        const orderToUpdate = new PatchOrderRequest(request.body).toOrderRead()
        await this.orderUseCases.updateOrder(id, orderToUpdate)
        response.json()
    }

    public async deleteOrder(request: Request, response: Response) {
        const { id } = request.params
        await this.orderUseCases.deleteOrder(id)
        response.json()
    }

    public async getQueue(request: Request, response: Response) {
        const result = await this.orderUseCases.getQueue()
        response.json(result)
    }
}
