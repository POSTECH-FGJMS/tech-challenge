import { IClientReadDto } from '../../domain/dtos/IClientReadDto'
import Client from '../../domain/entities/Client'

export interface IClientUseCase {
    getClient(params: IClientReadDto): Promise<Client[]>
}
