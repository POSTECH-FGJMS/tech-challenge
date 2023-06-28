import { IClientCreateDto, IClientReadDto } from '../dtos/IClientReadDto'
import Client from '../entities/Client'

export interface IClientRepository {
    createClient(params: IClientCreateDto): Promise<Client>
    readClient(params: IClientReadDto): Promise<Client[]>
}
