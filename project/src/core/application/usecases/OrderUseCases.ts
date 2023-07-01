import { Order, OrderEntity, OrderRead } from '../../domain/entities/Order'
import { ID } from '../../domain/valueObjects/ID'

export default interface OrderUseCases {
    postOrder(order: Order): Promise<OrderEntity>
    getOrders(orderValues: OrderRead): Promise<OrderEntity[]>
    updateOrder(orderId: ID, orderValues: OrderRead): Promise<void>
}
