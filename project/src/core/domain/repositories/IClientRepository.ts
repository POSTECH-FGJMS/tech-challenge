import { IClientReadDto } from '../dtos/IClientReadDto'
import Cliente from '../entities/Client'

export interface IClientRepository {
    readClient(params: IClientReadDto): Promise<Cliente[]>
}
