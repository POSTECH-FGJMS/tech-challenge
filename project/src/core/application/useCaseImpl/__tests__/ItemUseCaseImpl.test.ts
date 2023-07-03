import { BadRequestException } from '../../../../adapter/driver/errors/exceptions/BadRequestException'
import { Item, ItemRead } from '../../../domain/entities/Item'
import ItemRepository from '../../../domain/repositories/ItemRepository'
import { ItemUseCaseImpl } from '../ItemUseCaseImpl'

const mockCreateItem = jest.fn()
const mockReadItems = jest.fn()
const mockUpdateItem = jest.fn()
const mockDeleteItem = jest.fn()

const mockRepository: ItemRepository = {
    createItem: mockCreateItem,
    readItems: mockReadItems,
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
    it('should call repository to create an Item', () => {
        itemUseCaseImpl.postItem(item)

        expect(mockCreateItem).toHaveBeenCalledWith(item)
    })

    it('should throw a bad request on post if category is not valid', async () => {
        const invalidItem = {
            name: 'Batata',
            description: 'Batata Frita',
            price: 10.99,
            category: 'invalid',
        }

        await expect(() =>
            itemUseCaseImpl.postItem(invalidItem as Item)
        ).rejects.toThrow(BadRequestException)
    })

    it('should call reporitory with no parameters to get all items', () => {
        itemUseCaseImpl.getItems({})
        expect(mockReadItems).toHaveBeenCalledWith({})
    })

    it('should call repository with id to get items by id', () => {
        const id = '123'
        itemUseCaseImpl.getItems({ id })
        expect(mockReadItems).toHaveBeenCalledWith({ id })
    })

    it('should call repository to update item', () => {
        const id = '123'
        const description = 'Batata frita média'
        itemUseCaseImpl.updateItem(id, { description })
        expect(mockUpdateItem).toHaveBeenCalledWith(id, { description })
    })

    it('should throw a bad request on update if category is not valid', async () => {
        const invalidItem = {
            category: 'invalid',
        }

        await expect(() =>
            itemUseCaseImpl.updateItem('123', invalidItem as ItemRead)
        ).rejects.toThrow(BadRequestException)
    })

    it('should call repository to delete item', () => {
        const id = '123'
        itemUseCaseImpl.deleteItem(id)
        expect(mockDeleteItem).toHaveBeenCalledWith(id)
    })
})
