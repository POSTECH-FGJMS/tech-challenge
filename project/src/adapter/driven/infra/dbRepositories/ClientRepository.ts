import { Repository } from 'typeorm'
import { ClientEntity } from '../dbEntities/ClientEntity'
import { AppDataSource } from '../orm/TypeOrm'
import { IClientRepository } from '../../../../core/domain/repositories/IClientRepository'
import { Client, ClientRead } from '../../../../core/domain/entities/Client'

export class ClientRepository implements IClientRepository {
    private readonly repository: Repository<ClientEntity>

    constructor() {
        this.repository = AppDataSource.getRepository(ClientEntity)
    }

    public async createClient(client: Client) {
        return await this.repository.save(client)
    }

    public async readClient(params: ClientRead) {
        const { id, name, email, cpf } = params
        return await this.repository.find({ where: { id, name, email, cpf } })
    }
}
