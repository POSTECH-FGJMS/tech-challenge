import { Order, OrderEntity } from '../../domain/entities/Order'
import OrderRepository from '../../domain/repositories/OrderRepository'
import OrderUseCases from '../usecases/OrderUseCases'

export class OrderUseCaseImpl implements OrderUseCases {
    constructor(private readonly repository: OrderRepository) {}

    public async postOrder(order: Order) {
        return await this.repository.createOrder(order)
    }

    public async getOrders(orderValues: Partial<OrderEntity>) {
        return await this.repository.readOrders(orderValues)
    }
}
