import { Request, Response } from 'express'
import ItemUseCases from '../../../../core/application/usecases/ItemUseCases'
import { Item } from '../../../../core/domain/entities/Item'
import ItemController from '../ItemController'

const mockAdd = jest.fn()
const mockGetAll = jest.fn()
const mockUseCases: ItemUseCases = {
    add: mockAdd,
    getAll: mockGetAll,
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
    it('should add an item', () => {
        itemController.postItem({ body: { ...item } } as Request, mockResponse)

        expect(mockAdd).toHaveBeenCalledWith(item)
    })

    it('should get all items', () => {
        itemController.getAll({} as Request, mockResponse)
        expect(mockGetAll).toHaveBeenCalled()
    })
})
