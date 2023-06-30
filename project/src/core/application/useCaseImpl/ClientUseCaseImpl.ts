import { ClientUseCases } from '../usecases/ClientUseCases'
import { ClientRepository } from '../../domain/repositories/ClientRepository'
import { Client, ClientRead } from '../../domain/entities/Client'

export class ClientUseCaseImpl implements ClientUseCases {
    constructor(private readonly clientRepository: ClientRepository) {}

    public async postClient(client: Client) {
        return await this.clientRepository.createClient(client)
    }

    public async getClient(params: ClientRead) {
        return await this.clientRepository.readClient(params)
    }
}
