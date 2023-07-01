const mockSave = jest.fn()
const mockFind = jest.fn()
const mockUpdate = jest.fn()

import { ClientEntity } from '../../../../core/domain/entities/Client'
import { ItemEntity } from '../../../../core/domain/entities/Item'
import { Order, OrderRead } from '../../../../core/domain/entities/Order'
import app from '../../config/app'
import request from 'supertest'

jest.mock('../../../driven/infra/orm/TypeOrm', () => ({
    AppDataSource: {
        getRepository: () => ({
            save: mockSave,
            find: mockFind,
            update: mockUpdate,
        }),
    },
}))

describe('ItemRoutes', () => {
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
        client,
        items: [item],
    }
    const orderRequest = {
        status: 'Recebido',
        client: 'clienId',
        items: ['itemId'],
    }

    it('should create an order successfully', async () => {
        mockSave.mockImplementation(() =>
            Promise.resolve({
                id: 'orderId',
                ...order,
            })
        )

        const result = await request(app)
            .post('/order')
            .send(orderRequest)
            .expect(200)
        expect(result.body).toStrictEqual({ id: 'orderId', ...order })
    })

    it('should get an order successfully', async () => {
        mockFind.mockImplementation(() =>
            Promise.resolve([
                {
                    id: 'orderId',
                    ...order,
                },
            ])
        )

        const result = await request(app).get('/order').expect(200)
        expect(result.body).toStrictEqual([{ id: 'orderId', ...order }])
    })

    it('should update an order status successfully', async () => {
        const orderChanges: OrderRead = {
            status: 'Em preparação',
        }
        mockUpdate.mockImplementation(() => Promise.resolve())

        await request(app).patch('/order/123').send(orderChanges).expect(200)
    })
})
