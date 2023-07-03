import { Request, Response } from 'express'
import OrderUseCases from '../../../../core/application/usecases/OrderUseCases'
import { OrderController } from '../OrderController'
import { PostOrderRequest } from '../requests/PostOrderRequest'
import { Status } from '../../../../core/domain/valueObjects/Status'

const mockPostOrder = jest.fn()
const mockGetOrders = jest.fn()
const mockUpdateOrder = jest.fn()
const mockDeleteOrder = jest.fn()
const mockGetQueue = jest.fn()

const mockUseCases: OrderUseCases = {
    postOrder: mockPostOrder,
    getOrders: mockGetOrders,
    updateOrder: mockUpdateOrder,
    deleteOrder: mockDeleteOrder,
    getQueue: mockGetQueue,
}

const mockResponse = {
    json: jest.fn(),
    status: jest.fn(),
} as unknown as Response

describe('OrderController', () => {
    const orderRequest = new PostOrderRequest({
        client: 'clientId',
        items: ['itemId'],
    } as PostOrderRequest)

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

    it('should call use cases to update an order status', async () => {
        const id = '123'
        const status: Status = 'Em preparação'
        await orderController.patchOrder(
            { params: { id }, body: { status } } as unknown as Request,
            mockResponse
        )

        expect(mockUpdateOrder).toHaveBeenCalledWith(id, { status })
    })

    it('should call use cases to update an order client', async () => {
        const id = '123'
        const client = 'clientId'
        await orderController.patchOrder(
            { params: { id }, body: { client } } as unknown as Request,
            mockResponse
        )

        expect(mockUpdateOrder).toHaveBeenCalledWith(id, {
            client: { id: client },
        })
    })

    it('should call use cases to update order items', async () => {
        const id = '123'
        const items = ['itemId1', 'itemId2']
        await orderController.patchOrder(
            { params: { id }, body: { items } } as unknown as Request,
            mockResponse
        )

        expect(mockUpdateOrder).toHaveBeenCalledWith(id, {
            items: [{ id: items[0] }, { id: items[1] }],
        })
    })

    it('should call use cases to delete an order', async () => {
        const id = '123'
        await orderController.deleteOrder(
            { params: { id } } as unknown as Request,
            mockResponse
        )

        expect(mockDeleteOrder).toHaveBeenCalledWith(id)
    })

    it('should call use cases to get queue of orders', async () => {
        await orderController.getQueue({} as Request, mockResponse)

        expect(mockGetQueue).toHaveBeenCalled()
    })
})
