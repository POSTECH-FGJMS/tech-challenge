import { Item } from '../../../domain/entities/Item'
import ItemRepository from '../../../domain/repositories/ItemRepository'
import ItemService from '../ItemService'

const mockCreateItem = jest.fn()
const mockReadItem = jest.fn()
const mockUpdateItem = jest.fn()
const mockDeleteItem = jest.fn()

const mockRepository: ItemRepository = {
    createItem: mockCreateItem,
    readItem: mockReadItem,
    updateItem: mockUpdateItem,
    deleteItem: mockDeleteItem,
}

describe('Item Service', () => {
    const item: Item = {
        name: 'Batata',
        description: 'Batata Frita',
        price: 10.99,
        category: 'Acompanhamento',
    }

    const itemService = new ItemService(mockRepository)
    it('Should add an Item', () => {
        itemService.postItem(item)

        expect(mockCreateItem).toHaveBeenCalledWith(item)
    })

    it('should call reporitory with no parameters to get all items', () => {
        itemService.getItem({})
        expect(mockReadItem).toHaveBeenCalledWith({})
    })

    it('should call repository with id to get items by id', () => {
        const id = '123'
        itemService.getItem({ id })
        expect(mockReadItem).toHaveBeenCalledWith({ id })
    })

    it('should call repository to update item', () => {
        const id = '123'
        const description = 'Batata frita média'
        itemService.updateItem(id, { description })
        expect(mockUpdateItem).toHaveBeenCalledWith(id, { description })
    })

    it('should call repository to delete item', () => {
        const id = '123'
        itemService.deleteItem(id)
        expect(mockDeleteItem).toHaveBeenCalledWith(id)
    })
})
