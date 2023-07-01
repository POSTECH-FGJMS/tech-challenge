import { Order, OrderEntity, OrderRead } from '../entities/Order'

export default interface OrderRepository {
    createOrder(order: Order): Promise<OrderEntity>
    readOrders(orderValues: OrderRead): Promise<OrderEntity[]>
}
