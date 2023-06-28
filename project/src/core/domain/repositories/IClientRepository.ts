import { IClientReadDto } from '../dtos/IClientReadDto'
import Client from '../entities/Client'

export interface IClientRepository {
    readClient(params: IClientReadDto): Promise<Client[]>
}
