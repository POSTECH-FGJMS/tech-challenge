import Client from '../../../../core/domain/entities/Client'
import { ClientEntity } from '../dbEntities/ClientEntity'

export class ClientMapper {
    public static toDomain(entity: ClientEntity): Client {
        const { id, cpf, name, email } = entity

        return new Client(id, cpf, name, email)
    }

    public static toEntity(domain: Client): ClientEntity {
        const entity = new ClientEntity()
        entity.id = domain.id
        entity.name = domain.name
        entity.cpf = domain.cpf
        entity.email = domain.email
        return entity
    }
}
