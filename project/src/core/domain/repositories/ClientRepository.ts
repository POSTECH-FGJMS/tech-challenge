import { Client, ClientEntity, ClientRead } from '../entities/Client'

export interface ClientRepository {
    createClient(params: Client): Promise<ClientEntity>
    readClient(params: ClientRead): Promise<ClientEntity[]>
}
