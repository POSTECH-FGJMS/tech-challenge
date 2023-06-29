import { Item } from '../../../domain/entities/Item'
import ItemRepository from '../../dependencies/ItemRepository'
import ItemService from '../ItemService'

const mockCreate = jest.fn()
const mockRepository: ItemRepository = {
    create: mockCreate,
}

describe('Item Service', () => {
    it('Should add an Item', () => {
        const item: Item = {
            name: 'Batata',
            description: 'Batata Frita',
            price: '10.99',
            category: 'Acompanhamento',
            orderId: '1',
        }

        const itemService = new ItemService(mockRepository)

        itemService.add(item)

        expect(mockCreate).toHaveBeenCalledWith(item)
    })
})
