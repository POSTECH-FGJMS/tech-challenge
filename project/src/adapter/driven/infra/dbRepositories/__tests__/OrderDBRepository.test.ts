import { ClientEntity } from '../../../../../core/domain/entities/Client'
import { ItemEntity } from '../../../../../core/domain/entities/Item'
import { Order } from '../../../../../core/domain/entities/Order'
import { OrderDBRepository } from '../OrderDBRepository'

const mockSave = jest.fn()
const mockFind = jest.fn()

jest.mock('../../orm/TypeOrm', () => ({
    AppDataSource: {
        getRepository: () => ({
            save: mockSave,
            find: mockFind,
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

    it('should call typeorm to save an item', () => {
        orderDBRepository.createOrder(order)
        expect(mockSave).toHaveBeenCalledWith(order)
    })

    it('should call typeorm to get an item', () => {
        const id = '123'
        orderDBRepository.readOrders({ id })
        expect(mockFind).toHaveBeenCalledWith({
            where: { id },
            relations: {
                items: true,
                client: true,
            },
        })
    })
})
