import { ClientReadDto } from '../../domain/dtos/IClientReadDto'
import Cliente from '../../domain/entities/Client'

export interface IClientUseCase {
    getClient(params: ClientReadDto): Promise<Cliente[]>
}
