import { IClientUseCase } from '../interfaces/IClientUseCase'
import { IClientRepository } from '../../domain/repositories/IClientRepository'
import { Client, ClientRead } from '../../domain/entities/Client'

export class ClientUseCase implements IClientUseCase {
    constructor(private readonly clientRepository: IClientRepository) {}

    public async postClient(client: Client) {
        return await this.clientRepository.createClient(client)
    }

    public async getClient(params: ClientRead) {
        return await this.clientRepository.readClient(params)
    }
}
