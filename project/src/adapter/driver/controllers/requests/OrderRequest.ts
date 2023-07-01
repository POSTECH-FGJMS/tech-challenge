import { ClientEntity } from '../../../../core/domain/entities/Client'
import { ItemEntity } from '../../../../core/domain/entities/Item'
import { Order } from '../../../../core/domain/entities/Order'
import { ID } from '../../../../core/domain/valueObjects/ID'
import { Status } from '../../../../core/domain/valueObjects/Status'

export class OrderRequest {
    status: Status
    items: ID[]
    client: ID

    constructor(orderRequest: OrderRequest) {
        const { status, client, items } = orderRequest
        this.status = status
        this.client = client
        this.items = items
    }

    public toOrder() {
        return {
            status: this.status,
            client: { id: this.client } as ClientEntity,
            items: this.items.map((item) => ({ id: item } as ItemEntity)),
        } as Order
    }
}
