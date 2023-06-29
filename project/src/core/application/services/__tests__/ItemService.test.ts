import { Item } from '../../../domain/entities/Item'
import ItemRepository from '../../dependencies/ItemRepository'
import ItemService from '../ItemService'

const mockCreate = jest.fn()
const mockGetAll = jest.fn()
const mockRepository: ItemRepository = {
    create: mockCreate,
    getAll: mockGetAll,
}

describe('Item Service', () => {
    const item: Item = {
        name: 'Batata',
        description: 'Batata Frita',
        price: '10.99',
        category: 'Acompanhamento',
        orderId: '1',
    }

    const itemService = new ItemService(mockRepository)
    it('Should add an Item', () => {
        itemService.add(item)

        expect(mockCreate).toHaveBeenCalledWith(item)
    })

    it('should get all items', () => {
        itemService.getAll()
        expect(mockGetAll).toHaveBeenCalled()
    })
})
