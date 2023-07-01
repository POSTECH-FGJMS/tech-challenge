import { Request, Response } from 'express'
import ItemUseCases from '../../../../core/application/usecases/ItemUseCases'
import { Item } from '../../../../core/domain/entities/Item'
import { ItemController } from '../ItemController'

const mockPostItem = jest.fn()
const mockGetItems = jest.fn()
const mockUpdateItem = jest.fn()
const mockDeleteItem = jest.fn()

const mockUseCases: ItemUseCases = {
    postItem: mockPostItem,
    getItems: mockGetItems,
    updateItem: mockUpdateItem,
    deleteItem: mockDeleteItem,
}

const mockResponse = {
    json: jest.fn(),
    status: jest.fn(),
} as unknown as Response

describe('ItemController', () => {
    const item: Item = {
        name: 'Batata',
        description: 'Batata Frita',
        price: 10.99,
        category: 'Acompanhamento',
    }

    const itemController = new ItemController(mockUseCases)
    it('should call use cases to post an item', () => {
        itemController.postItem({ body: { ...item } } as Request, mockResponse)

        expect(mockPostItem).toHaveBeenCalledWith(item)
    })

    it('should call use cases to get all items', () => {
        itemController.getItems({ query: {} } as Request, mockResponse)
        expect(mockGetItems).toHaveBeenCalledWith({})
    })

    it('should call use cases to get items by id', () => {
        const id = '123'
        itemController.getItems(
            { query: { id } } as unknown as Request,
            mockResponse
        )

        expect(mockGetItems).toHaveBeenCalledWith({ id })
    })

    it('should call use cases to update an item', () => {
        const id = '123'
        const description = 'Batata Frita Média'

        itemController.patchItem(
            { params: { id }, body: { description } } as unknown as Request,
            mockResponse
        )

        expect(mockUpdateItem).toHaveBeenCalledWith(id, { description })
    })

    it('should call use cases to delete an item', () => {
        const id = '123'

        itemController.deleteItem(
            { params: { id } } as unknown as Request,
            mockResponse
        )

        expect(mockDeleteItem).toHaveBeenCalledWith(id)
    })
})
