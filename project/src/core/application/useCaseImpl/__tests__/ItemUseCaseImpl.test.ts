import { Item } from '../../../domain/entities/Item'
import ItemRepository from '../../../domain/repositories/ItemRepository'
import ItemUseCaseImpl from '../ItemUseCaseImpl'

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

describe('ItemUseCaseImpl', () => {
    const item: Item = {
        name: 'Batata',
        description: 'Batata Frita',
        price: 10.99,
        category: 'Acompanhamento',
    }

    const itemUseCaseImpl = new ItemUseCaseImpl(mockRepository)
    it('Should add an Item', () => {
        itemUseCaseImpl.postItem(item)

        expect(mockCreateItem).toHaveBeenCalledWith(item)
    })

    it('should call reporitory with no parameters to get all items', () => {
        itemUseCaseImpl.getItem({})
        expect(mockReadItem).toHaveBeenCalledWith({})
    })

    it('should call repository with id to get items by id', () => {
        const id = '123'
        itemUseCaseImpl.getItem({ id })
        expect(mockReadItem).toHaveBeenCalledWith({ id })
    })

    it('should call repository to update item', () => {
        const id = '123'
        const description = 'Batata frita média'
        itemUseCaseImpl.updateItem(id, { description })
        expect(mockUpdateItem).toHaveBeenCalledWith(id, { description })
    })

    it('should call repository to delete item', () => {
        const id = '123'
        itemUseCaseImpl.deleteItem(id)
        expect(mockDeleteItem).toHaveBeenCalledWith(id)
    })
})
