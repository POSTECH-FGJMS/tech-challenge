import { Repository } from 'typeorm'
import OrderRepository from '../../../../core/domain/repositories/OrderRepository'
import { OrderDBEntity } from '../dbEntities/OrderDBEntity'
import { AppDataSource } from '../orm/TypeOrm'
import { Order, OrderEntity } from '../../../../core/domain/entities/Order'

export class OrderDBRepository implements OrderRepository {
    private readonly repository: Repository<OrderDBEntity>

    constructor() {
        this.repository = AppDataSource.getRepository(OrderDBEntity)
    }

    public async createOrder(order: Order) {
        return this.repository.save(order)
    }

    public async readOrders(orderValues: Partial<OrderEntity>) {
        return await this.repository.find({
            where: orderValues,
            relations: {
                items: true,
                client: true,
            },
        })
    }

    public async updateOrders(
        orderId: string,
        orderValues: Partial<OrderEntity>
    ) {
        await this.repository.save({ id: orderId, ...orderValues })
    }

    public async deleteOrder(orderId: string) {
        await this.repository.delete(orderId)
    }
}
