import { Item } from '../../../../../core/domain/entities/Item'
import ItemDBRepository from '../ItemDBRepository'

const mockSave = jest.fn()
const mockFind = jest.fn()
const mockUpdate = jest.fn()

jest.mock('../../orm/TypeOrm', () => ({
    AppDataSource: {
        getRepository: () => ({
            save: mockSave,
            find: mockFind,
            update: mockUpdate,
        }),
    },
}))

describe('ItemDBRepository', () => {
    const item: Item = {
        name: 'Batata',
        description: 'Batata Frita',
        price: '10.99',
        category: 'Acompanhamento',
    }

    const itemDBRepository = new ItemDBRepository()
    it('should call typeorm to create an item', () => {
        itemDBRepository.createItem(item)
        expect(mockSave).toHaveBeenCalledWith(item)
    })

    it('should call typeorm to get all items', () => {
        itemDBRepository.readItem({})
        expect(mockFind).toHaveBeenCalledWith({ where: {} })
    })

    it('should call typeorm to get item by query id', () => {
        const id = '123'
        itemDBRepository.readItem({ id })
        expect(mockFind).toHaveBeenCalledWith({ where: { id } })
    })

    it('should call typeorm to update an item', () => {
        const id = '123'
        const description = 'Batata Frita Média'

        itemDBRepository.updateItem(id, { description })

        expect(mockUpdate).toHaveBeenCalledWith(id, { description })
    })
})
