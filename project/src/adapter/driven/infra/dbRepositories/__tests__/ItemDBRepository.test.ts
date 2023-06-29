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
        orderId: '1',
    }

    const itemDBRepository = new ItemDBRepository()
    it('should create an item', () => {
        itemDBRepository.create(item)
        expect(mockSave).toHaveBeenCalledWith(item)
    })

    it('should get all items', () => {
        itemDBRepository.getAll()
        expect(mockFind).toHaveBeenCalled()
    })
})
