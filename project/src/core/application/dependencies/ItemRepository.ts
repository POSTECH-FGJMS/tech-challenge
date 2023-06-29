import Item from '../../domain/entities/Item'

export default interface ItemRepository {
    create(item: Omit<Item, 'id'>): Promise<Item>
}
