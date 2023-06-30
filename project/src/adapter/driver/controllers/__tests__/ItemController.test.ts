import { Request, Response } from 'express'
import ItemUseCases from '../../../../core/application/usecases/ItemUseCases'
import { Item } from '../../../../core/domain/entities/Item'
import ItemController from '../ItemController'

const mockPostItem = jest.fn()
const mockGetItem = jest.fn()
const mockUseCases: ItemUseCases = {
    postItem: mockPostItem,
    getItem: mockGetItem,
}

const mockResponse = {
    json: jest.fn(),
} as unknown as Response

describe('ItemController', () => {
    const item: Item = {
        name: 'Batata',
        description: 'Batata Frita',
        price: '10.99',
        category: 'Acompanhamento',
    }

    const itemController = new ItemController(mockUseCases)
    it('should post an item', () => {
        itemController.postItem({ body: { ...item } } as Request, mockResponse)

        expect(mockPostItem).toHaveBeenCalledWith(item)
    })

    it('should get all items', () => {
        itemController.getItem({ query: {} } as Request, mockResponse)
        expect(mockGetItem).toHaveBeenCalledWith({})
    })

    it('should get items by id', () => {
        const id = '123'
        itemController.getItem(
            { query: { id } } as unknown as Request,
            mockResponse
        )

        expect(mockGetItem).toHaveBeenCalledWith({ id })
    })
})
