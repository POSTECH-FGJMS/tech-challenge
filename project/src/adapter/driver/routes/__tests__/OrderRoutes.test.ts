const mockSave = jest.fn()
const mockFind = jest.fn()

import { ClientEntity } from '../../../../core/domain/entities/Client'
import { ItemEntity } from '../../../../core/domain/entities/Item'
import { Order } from '../../../../core/domain/entities/Order'
import app from '../../config/app'
import request from 'supertest'

jest.mock('../../../driven/infra/orm/TypeOrm', () => ({
    AppDataSource: {
        getRepository: () => ({
            save: mockSave,
            find: mockFind,
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
})
