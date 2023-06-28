import { DeepPartial, Repository } from "typeorm";
import { ClientEntity } from "../entities/ClientEntity";
import { ClientMapper } from "../mappers/ClientMapper";
import { AppDataSource } from "../orm/TypeOrm";
import { IClientRepository } from "../../../../core/domain/repositories/IClientRepository";
import Client from "../../../../core/domain/entities/Client";
import { IClientCreateDto, IClientReadDto } from "../../../../core/domain/dtos/IClientReadDto";

export class ClientRepository implements IClientRepository {

  private readonly repository: Repository<ClientEntity>

  constructor() {
    this.repository = AppDataSource.getRepository(ClientEntity);
  }

  public async createClient(params: IClientCreateDto): Promise<Client> {
    const { name, email, cpf } = params;
    const clientData: DeepPartial<ClientEntity> = {}

    if (name) {
      clientData.name = name;
    }

    if (email) {
      clientData.email = email;
    }

    if (cpf) {
      clientData.cpf = cpf;
    }

    const result = await this.repository.save(clientData);

    return ClientMapper.toDomain(result);
  }

  public async readClient(params: IClientReadDto): Promise<Client[]> {
    const { id, name, email, cpf } = params;

    const where = ClientMapper.toEntity({ id, name, email, cpf } as Client)
    const clients = await this.repository.find({ where: { ...where } });

    return clients.map(ClientMapper.toDomain);
  }
}
