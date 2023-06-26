import { IClientUseCase } from "../interfaces/ClientUseCase";
import { IClientRepository } from "../../domain/repositories/ClientRepository";
import { ClientReadDto } from "../../domain/dtos/ClientReadDto";
import Cliente from "../../domain/entities/Cliente";

export class ClientUseCase implements IClientUseCase {

  constructor(private readonly clientRepository: IClientRepository) { }

  public getClient(params: ClientReadDto): Promise<Cliente[]> {
    return this.clientRepository.readClient(params);
  }
}