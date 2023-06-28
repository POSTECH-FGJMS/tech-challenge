import Client from '../../../../core/domain/entities/Client'
import CPF from '../../../../core/domain/valueobjects/CPF'
import Email from '../../../../core/domain/valueobjects/Email'
import { ClientEntity } from '../entities/ClientEntity'

export class ClientMapper {
    public static toDomain(entity: ClientEntity): Client {
        const { id, cpf, name, email } = entity
        const cpfInstance = cpf ? new CPF(cpf) : undefined
        const emailInstance = email ? new Email(email) : undefined

        return new Client(id, cpfInstance, name, emailInstance)
    }

    public static toEntity(domain: Client): ClientEntity {
        const entity = new ClientEntity()
        entity.id = domain.id
        entity.name = domain.name
        entity.cpf = domain.cpf?.value
        entity.email = domain.email?.value
        return entity
    }
}
