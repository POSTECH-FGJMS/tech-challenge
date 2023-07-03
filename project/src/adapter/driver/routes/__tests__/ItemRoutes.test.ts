const mockSave = jest.fn()
const mockFind = jest.fn()
const mockUpdate = jest.fn()
const mockDelete = jest.fn()

import app from '../../config/app'
import request from 'supertest'

jest.mock('../../../driven/infra/orm/TypeOrm', () => ({
    AppDataSource: {
        getRepository: () => ({
            save: mockSave,
            find: mockFind,
            update: mockUpdate,
            delete: mockDelete,
        }),
    },
}))

describe('ItemRoutes', () => {
    beforeEach(() => {
        mockSave.mockClear()
        mockFind.mockClear()
        mockUpdate.mockClear()
        mockDelete.mockClear()
    })
    it('should create an item successfully', async () => {
        const item = {
            name: 'Batata Frita',
            description: 'Batata Frita Média',
            price: 10.99,
            category: 'Acompanhamento',
        }

        mockSave.mockImplementation(() =>
            Promise.resolve({ id: '123', ...item })
        )

        const result = await request(app).post('/item').send(item).expect(200)
        expect(result.body).toStrictEqual({ id: '123', ...item })
    })

    it('should get items successfully', async () => {
        const item = {
            id: '123',
            name: 'Batata Frita',
            description: 'Batata Frita Média',
            price: 10.99,
            category: 'Acompanhamento',
        }

        mockFind.mockImplementation(() => Promise.resolve([item]))

        const result = await request(app).get('/item').expect(200)
        expect(result.body).toStrictEqual([item])
    })

    it('should update items successfully', async () => {
        const itemChanges = {
            price: 10.99,
            category: 'Acompanhamento',
        }

        mockUpdate.mockImplementation(() => Promise.resolve())

        await request(app).patch('/item/123').send(itemChanges).expect(200)
    })

    it('should delete an item successfully', async () => {
        mockDelete.mockImplementation(() => Promise.resolve())

        await request(app).delete('/item/123').expect(200)
    })

    it('should return error 500 if item creation fails', async () => {
        const wrongItem = {
            name: 'Batata Frita',
        }

        mockSave.mockImplementation(() => Promise.reject('Error'))

        await request(app).post('/item').send(wrongItem).expect(500)
    })
})
