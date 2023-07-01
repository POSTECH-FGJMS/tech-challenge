import { Repository } from 'typeorm'
import { ClientDBEntity } from '../dbEntities/ClientDBEntity'
import { AppDataSource } from '../orm/TypeOrm'
import { ClientRepository } from '../../../../core/domain/repositories/ClientRepository'
import { Client, ClientRead } from '../../../../core/domain/entities/Client'

export class ClientDBRepository implements ClientRepository {
    private readonly repository: Repository<ClientDBEntity>

    constructor() {
        this.repository = AppDataSource.getRepository(ClientDBEntity)
    }

    public async createClient(client: Client) {
        return await this.repository.save(this.repository.create(client))
    }

    public async readClients(params: ClientRead) {
        const { id, name, email, cpf } = params
        return await this.repository.find({ where: { id, name, email, cpf } })
    }
}
