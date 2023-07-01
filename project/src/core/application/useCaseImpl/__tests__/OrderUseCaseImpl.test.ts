import { ClientEntity } from '../../../domain/entities/Client'
import { ItemEntity } from '../../../domain/entities/Item'
import { Order, OrderRead } from '../../../domain/entities/Order'
import OrderRepository from '../../../domain/repositories/OrderRepository'
import { OrderUseCaseImpl } from '../OrderUseCaseImpl'

const mockCreateOrder = jest.fn()
const mockReadOrders = jest.fn()
const mockUpdateOrder = jest.fn()

const mockRepository: OrderRepository = {
    createOrder: mockCreateOrder,
    readOrders: mockReadOrders,
    updateOrders: mockUpdateOrder,
}

describe('OrderUseCaseImpl', () => {
    const item: ItemEntity = {
        id: 'itemId',
        name: 'Batata',
        description: 'Batata Frita',
        category: 'Acompanhamento',
        price: 10.99,
    }
    const client: ClientEntity = {
        id: 'clientId',
        name: 'Pedro',
    }
    const order: Order = {
        status: 'Recebido',
        items: [item],
        client,
    }

    const orderUseCaseImpl = new OrderUseCaseImpl(mockRepository)

    it('should call repository to create an order', async () => {
        await orderUseCaseImpl.postOrder(order)

        expect(mockCreateOrder).toHaveBeenCalledWith(order)
    })

    it('should call repository to read an order', async () => {
        const id = '123'
        await orderUseCaseImpl.getOrders({ id })

        expect(mockReadOrders).toHaveBeenCalledWith({ id })
    })

    it('should call repository to update an order', async () => {
        const id = '123'
        const newValues: OrderRead = { status: 'Em preparação' }

        await orderUseCaseImpl.updateOrder(id, newValues)

        expect(mockUpdateOrder).toHaveBeenCalledWith(id, newValues)
    })
})
