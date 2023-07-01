import { Client, ClientEntity, ClientRead } from '../entities/Client'

export interface ClientRepository {
    createClient(params: Client): Promise<ClientEntity>
    readClients(params: ClientRead): Promise<ClientEntity[]>
}
