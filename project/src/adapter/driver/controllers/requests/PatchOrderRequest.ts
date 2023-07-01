import { ItemEntity } from '../../../../core/domain/entities/Item'
import { OrderRead } from '../../../../core/domain/entities/Order'
import { ID } from '../../../../core/domain/valueObjects/ID'
import { Status } from '../../../../core/domain/valueObjects/Status'

export class PatchOrderRequest {
    status?: Status
    items?: ID[]
    client?: ID

    constructor(patchOrderRequest: PatchOrderRequest) {
        const { status, client, items } = patchOrderRequest
        this.status = status
        this.client = client
        this.items = items
    }

    public toOrderRead() {
        return {
            ...(this.status && { status: this.status }),
            ...(this.client && { client: { id: this.client } }),
            ...(this.items && {
                items: this.items.map((item) => ({ id: item } as ItemEntity)),
            }),
        } as OrderRead
    }
}
