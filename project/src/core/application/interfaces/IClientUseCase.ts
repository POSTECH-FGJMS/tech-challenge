import {
    IClientCreateDto,
    IClientReadDto,
} from '../../domain/dtos/IClientReadDto'
import Client from '../../domain/entities/Client'

export interface IClientUseCase {
    postClient(params: IClientCreateDto): Promise<Client>
    getClient(params: IClientReadDto): Promise<Client[]>
}
