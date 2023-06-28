import { IClientUseCase } from '../interfaces/IClientUseCase'
import { IClientRepository } from '../../domain/repositories/IClientRepository'
import {
    IClientCreateDto,
    IClientReadDto,
} from '../../domain/dtos/IClientReadDto'
import Client from '../../domain/entities/Client'

export class ClientUseCase implements IClientUseCase {
    constructor(private readonly clientRepository: IClientRepository) {}

    public postClient(params: IClientCreateDto): Promise<Client> {
        return this.clientRepository.createClient(params)
    }

    public getClient(params: IClientReadDto): Promise<Client[]> {
        return this.clientRepository.readClient(params)
    }
}
