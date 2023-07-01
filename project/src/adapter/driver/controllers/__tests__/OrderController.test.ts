import { Request, Response } from 'express'
import OrderUseCases from '../../../../core/application/usecases/OrderUseCases'
import { OrderController } from '../OrderController'
import { OrderRequest } from '../requests/OrderRequest'

const mockPostOrder = jest.fn()
const mockGetOrders = jest.fn()

const mockUseCases: OrderUseCases = {
    postOrder: mockPostOrder,
    getOrders: mockGetOrders,
}

const mockResponse = {
    json: jest.fn(),
    status: jest.fn(),
} as unknown as Response

describe('OrderController', () => {
    const orderRequest = new OrderRequest({
        status: 'Recebido',
        client: 'clientId',
        items: ['itemId'],
    } as OrderRequest)

    const orderController = new OrderController(mockUseCases)

    it('should call use cases to post an order', async () => {
        await orderController.postOrder(
            { body: orderRequest } as Request,
            mockResponse
        )
        expect(mockPostOrder).toHaveBeenCalledWith(orderRequest.toOrder())
    })

    it('should call use cases to get an order', async () => {
        const id = '123'
        await orderController.getOrder(
            { query: { id } } as unknown as Request,
            mockResponse
        )
        expect(mockGetOrders).toHaveBeenCalledWith({ id })
    })
})
