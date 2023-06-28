import { Repository } from "typeorm";
import { ClientEntity } from "../entities/ClientEntity";
import { ClientMapper } from "../mappers/ClientMapper";
import { AppDataSource } from "../orm/TypeOrm";
import { IClientRepository } from "../../../../core/domain/repositories/IClientRepository";
import Client from "../../../../core/domain/entities/Client";
import { IClientReadDto } from "../../../../core/domain/dtos/IClientReadDto";

export class ClientRepository implements IClientRepository {

  private readonly repository: Repository<ClientEntity>

  constructor() {
    this.repository = AppDataSource.getRepository(ClientEntity);
  }

  public async readClient(params: IClientReadDto): Promise<Client[]> {
    const { id, name, email, cpf } = params;

    const where = ClientMapper.toEntity({ id, name, email, cpf } as Client)
    const clients = await this.repository.find({ where: { ...where } });

    return clients.map(ClientMapper.toDomain);
  }
}
