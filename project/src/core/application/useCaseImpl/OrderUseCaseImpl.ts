import { Order, OrderEntity, OrderRead } from '../../domain/entities/Order'
import OrderRepository from '../../domain/repositories/OrderRepository'
import { ID } from '../../domain/valueObjects/ID'
import OrderUseCases from '../usecases/OrderUseCases'

export class OrderUseCaseImpl implements OrderUseCases {
    constructor(private readonly repository: OrderRepository) {}

    public async postOrder(order: Order) {
        return await this.repository.createOrder(order)
    }

    public async getOrders(orderValues: Partial<OrderEntity>) {
        return await this.repository.readOrders(orderValues)
    }

    public async updateOrder(orderId: ID, orderValues: OrderRead) {
        return await this.repository.updateOrders(orderId, orderValues)
    }

    public async deleteOrder(orderId: ID) {
        return await this.repository.deleteOrder(orderId)
    }
}
