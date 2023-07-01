import { Request, Response } from 'express'
import OrderUseCases from '../../../core/application/usecases/OrderUseCases'
import { OrderRead } from '../../../core/domain/entities/Order'
import { OrderRequest } from './requests/OrderRequest'

export class OrderController {
    constructor(private readonly orderUseCases: OrderUseCases) {}

    public async postOrder(request: Request, response: Response) {
        const orderToPost = new OrderRequest(request.body).toOrder()
        const order = await this.orderUseCases.postOrder(orderToPost)
        response.json(order)
    }

    public async getOrder(request: Request, response: Response) {
        const orders = await this.orderUseCases.getOrders(
            request.query as OrderRead
        )
        response.json(orders)
    }
}
