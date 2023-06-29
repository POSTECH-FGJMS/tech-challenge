import { Item } from '../../../../../core/domain/entities/Item'
import ItemDBRepository from '../ItemDBRepository'

const mockSave = jest.fn()

jest.mock('../../orm/TypeOrm', () => ({
    AppDataSource: {
        getRepository: () => ({
            save: mockSave,
        }),
    },
}))

describe('ItemDBRepository', () => {
    it('should create an item', () => {
        const item: Item = {
            name: 'Batata',
            description: 'Batata Frita',
            price: '10.99',
            category: 'Acompanhamento',
            orderId: '1',
        }

        const itemDBRepository = new ItemDBRepository()

        itemDBRepository.create(item)

        expect(mockSave).toHaveBeenCalledWith(item)
    })
})
