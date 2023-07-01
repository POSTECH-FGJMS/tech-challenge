import { Client, ClientRead } from '../../domain/entities/Client'

export interface ClientUseCases {
    postClient(params: Client): Promise<Client>
    getClients(params: ClientRead): Promise<Client[]>
}
