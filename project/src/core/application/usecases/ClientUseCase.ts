import { IClientUseCase } from '../interfaces/IClientUseCase'
import { IClientRepository } from '../../domain/repositories/IClientRepository'
import { IClientReadDto } from '../../domain/dtos/IClientReadDto'
import Client from '../../domain/entities/Client'

export class ClientUseCase implements IClientUseCase {
    constructor(private readonly clientRepository: IClientRepository) { }

    public getClient(params: IClientReadDto): Promise<Client[]> {
        return this.clientRepository.readClient(params)
    }
}
