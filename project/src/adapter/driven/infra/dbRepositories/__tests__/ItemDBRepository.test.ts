import { Item } from '../../../../../core/domain/entities/Item'
import { ItemDBRepository } from '../ItemDBRepository'

const mockSave = jest.fn()
const mockFind = jest.fn()
const mockUpdate = jest.fn()
const mockDelete = jest.fn()

jest.mock('../../orm/TypeOrm', () => ({
    AppDataSource: {
        getRepository: () => ({
            save: mockSave,
            find: mockFind,
            update: mockUpdate,
            delete: mockDelete,
        }),
    },
}))

describe('ItemDBRepository', () => {
    const item: Item = {
        name: 'Batata',
        description: 'Batata Frita',
        price: 10.99,
        category: 'Acompanhamento',
    }

    const itemDBRepository = new ItemDBRepository()
    it('should call typeorm to save an item', () => {
        itemDBRepository.createItem(item)
        expect(mockSave).toHaveBeenCalledWith(item)
    })

    it('should call typeorm to get all items', () => {
        itemDBRepository.readItems({})
        expect(mockFind).toHaveBeenCalledWith({ where: {} })
    })

    it('should call typeorm to get item by query id', () => {
        const id = '123'
        itemDBRepository.readItems({ id })
        expect(mockFind).toHaveBeenCalledWith({ where: { id } })
    })

    it('should call typeorm to update an item', () => {
        const id = '123'
        const description = 'Batata Frita Média'

        itemDBRepository.updateItem(id, { description })

        expect(mockUpdate).toHaveBeenCalledWith(id, { description })
    })

    it('should call typeorm to delete an item', () => {
        const id = '123'

        itemDBRepository.deleteItem(id)
        expect(mockDelete).toHaveBeenCalledWith(id)
    })
})
