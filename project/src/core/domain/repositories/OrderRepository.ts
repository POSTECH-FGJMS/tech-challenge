import { Order, OrderEntity, OrderRead } from '../entities/Order'
import { ID } from '../valueObjects/ID'

export default interface OrderRepository {
    createOrder(order: Order): Promise<OrderEntity>
    readOrders(orderValues: OrderRead): Promise<OrderEntity[]>
    updateOrders(orderId: ID, orderValues: OrderRead): Promise<void>
    deleteOrder(orderId: ID): Promise<void>
    readQueue(): Promise<OrderEntity[]>
}
