import Cliente from '../../../../core/domain/entities/Cliente';
import CPF from '../../../../core/domain/valueobjects/CPF';
import Email from '../../../../core/domain/valueobjects/Email';
import { ClientEntity } from '../entities/ClientEntity';

export class ClientMapper {
  public static toDomain(entity: ClientEntity): Cliente {
    const { id, cpf, name, email } = entity;
    return new Cliente(id, new CPF(cpf), name, new Email(email));
  }

  public static toEntity(domain: Cliente): ClientEntity {
    const entity = new ClientEntity();
    entity.id = domain.id;
    entity.name = domain.nome;
    entity.cpf = domain.cpf.value;
    entity.email = domain.email.value;
    return entity;
  }
}