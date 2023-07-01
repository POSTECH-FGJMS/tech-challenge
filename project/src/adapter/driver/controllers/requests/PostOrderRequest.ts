import { ClientEntity } from '../../../../core/domain/entities/Client'
import { ItemEntity } from '../../../../core/domain/entities/Item'
import { Order } from '../../../../core/domain/entities/Order'
import { ID } from '../../../../core/domain/valueObjects/ID'

export class PostOrderRequest {
    items: ID[]
    client: ID

    constructor(orderRequest: PostOrderRequest) {
        const { client, items } = orderRequest
        this.client = client
        this.items = items
    }

    public toOrder() {
        return {
            client: { id: this.client } as ClientEntity,
            items: this.items.map((item) => ({ id: item } as ItemEntity)),
        } as Order
    }
}
