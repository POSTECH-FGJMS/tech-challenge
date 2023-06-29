import Item from '../../domain/entities/Item'

export default interface ItemUseCases {
    add(item: Omit<Item, 'id'>): Promise<Item>
}
