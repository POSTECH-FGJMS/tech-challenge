import { Client, ClientEntity, ClientRead } from '../entities/Client'

export interface IClientRepository {
    createClient(params: Client): Promise<ClientEntity>
    readClient(params: ClientRead): Promise<ClientEntity[]>
}
