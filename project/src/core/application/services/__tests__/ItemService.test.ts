import { Item } from '../../../domain/entities/Item'
import ItemRepository from '../../../domain/repositories/ItemRepository'
import ItemService from '../ItemService'

const mockCreateItem = jest.fn()
const mockReadItem = jest.fn()
const mockRepository: ItemRepository = {
    createItem: mockCreateItem,
    readItem: mockReadItem,
}

describe('Item Service', () => {
    const item: Item = {
        name: 'Batata',
        description: 'Batata Frita',
        price: '10.99',
        category: 'Acompanhamento',
    }

    const itemService = new ItemService(mockRepository)
    it('Should add an Item', () => {
        itemService.postItem(item)

        expect(mockCreateItem).toHaveBeenCalledWith(item)
    })

    it('should get all items', () => {
        itemService.getItem({})
        expect(mockReadItem).toHaveBeenCalledWith({})
    })

    it('should get items by id', () => {
        const id = '123'
        itemService.getItem({ id })
        expect(mockReadItem).toHaveBeenCalledWith({ id })
    })
})
