import { Item } from '../../../../../core/domain/entities/Item'
import ItemDBRepository from '../ItemDBRepository'

const mockSave = jest.fn()
const mockFind = jest.fn()

jest.mock('../../orm/TypeOrm', () => ({
    AppDataSource: {
        getRepository: () => ({
            save: mockSave,
            find: mockFind,
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
    it('should create an item', () => {
        itemDBRepository.createItem(item)
        expect(mockSave).toHaveBeenCalledWith(item)
    })

    it('should get all items', () => {
        itemDBRepository.readItem({})
        expect(mockFind).toHaveBeenCalledWith({ where: {} })
    })

    it('should get item by query id', () => {
        const id = '123'
        itemDBRepository.readItem({ id })
        expect(mockFind).toHaveBeenCalledWith({ where: { id } })
    })
})
