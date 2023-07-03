import { ClientEntity } from '../../../../../core/domain/entities/Client'
import { ItemEntity } from '../../../../../core/domain/entities/Item'
import { Order, OrderRead } from '../../../../../core/domain/entities/Order'
import { OrderDBRepository } from '../OrderDBRepository'

const mockSave = jest.fn()
const mockFind = jest.fn()
const mockDelete = jest.fn()

jest.mock('../../orm/TypeOrm', () => ({
    AppDataSource: {
        getRepository: () => ({
            save: mockSave,
            find: mockFind,
            delete: mockDelete,
        }),
    },
}))

describe('OrderDBRepository', () => {
    const item: ItemEntity = {
        id: 'itemId',
        name: 'Batata',
        description: 'Batata Frita',
        price: 10.99,
        category: 'Acompanhamento',
    }

    const client: ClientEntity = {
        id: 'clientId',
        name: 'Pedro',
    }

    const order: Order = {
        status: 'Recebido',
        items: [item],
        client: client,
    }

    const orderDBRepository = new OrderDBRepository()

    beforeEach(() => {
        mockSave.mockClear()
        mockFind.mockClear()
    })

    it('should call typeorm to save an order', async () => {
        await orderDBRepository.createOrder(order)
        expect(mockSave).toHaveBeenCalledWith(order)
    })

    it('should call typeorm to get an order', async () => {
        const id = '123'
        await orderDBRepository.readOrders({ id })
        expect(mockFind).toHaveBeenCalledWith({
            where: { id },
            relations: {
                items: true,
                client: true,
            },
        })
    })

    it('should call typeorm to update an order', async () => {
        const id = '123'
        const newValues: OrderRead = {
            status: 'Em preparação',
        }

        await orderDBRepository.updateOrders(id, newValues)
        expect(mockSave).toHaveBeenCalledWith({ id, ...newValues })
    })

    it('should call typeorm to delete an order', async () => {
        const id = '123'

        await orderDBRepository.deleteOrder(id)
        expect(mockDelete).toHaveBeenCalledWith(id)
    })

    it('should call typeorm to get queue of orders', async () => {
        await orderDBRepository.readQueue()
        expect(mockFind).toHaveBeenCalledWith({
            order: {
                createdAt: 'ASC',
            },
            where: [
                {
                    status: 'Recebido',
                },
                {
                    status: 'Em preparação',
                },
            ],
            relations: {
                items: true,
                client: true,
            },
        })
    })
})
