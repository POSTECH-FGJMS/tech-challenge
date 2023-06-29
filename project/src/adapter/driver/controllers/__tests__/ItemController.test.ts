import { Request } from 'express'
import ItemUseCases from '../../../../core/application/usecases/ItemUseCases'
import { Item } from '../../../../core/domain/entities/Item'
import ItemController from '../ItemController'

const mockAdd = jest.fn()
const mockUseCases: ItemUseCases = {
    add: mockAdd,
}

describe('ItemController', () => {
    it('should add an item', () => {
        const item: Item = {
            name: 'Batata',
            description: 'Batata Frita',
            price: '10.99',
            category: 'Acompanhamento',
            orderId: '1',
        }

        const itemController = new ItemController(mockUseCases)

        itemController.postItem({ body: { ...item } } as Request)

        expect(mockAdd).toHaveBeenCalledWith(item)
    })
})
