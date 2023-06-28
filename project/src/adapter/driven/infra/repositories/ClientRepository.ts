import { Repository } from "typeorm";
import { ClientReadDto } from "../../../../core/domain/dtos/ClientReadDto";
import Cliente from "../../../../core/domain/entities/Cliente";
import { IClientRepository } from "../../../../core/domain/repositories/ClientRepository";
import { ClientEntity } from "../entities/ClientEntity";
import { ClientMapper } from "../mappers/ClientMapper";
import { AppDataSource } from "../orm/TypeOrm";

export class ClientRepository implements IClientRepository {

  private readonly repository: Repository<ClientEntity>

  constructor() {
    this.repository = AppDataSource.getRepository(ClientEntity);
  }

  public async readClient(params: ClientReadDto): Promise<Cliente[]> {
    const clients = await this.repository.find();
    return clients.map(ClientMapper.toDomain);
  }
}
