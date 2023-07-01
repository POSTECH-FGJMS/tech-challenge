import { Order, OrderEntity, OrderRead } from '../../domain/entities/Order'

export default interface OrderUseCases {
    postOrder(order: Order): Promise<OrderEntity>
    getOrders(orderValues: OrderRead): Promise<OrderEntity[]>
}
