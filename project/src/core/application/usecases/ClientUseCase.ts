import { IClientUseCase } from "../interfaces/IClientUseCase";
import { IClientRepository } from "../../domain/repositories/IClientRepository";
import { ClientReadDto } from "../../domain/dtos/IClientReadDto";
import Cliente from "../../domain/entities/Client";

export class ClientUseCase implements IClientUseCase {
  constructor(private readonly clientRepository: IClientRepository) {}

  public getClient(params: ClientReadDto): Promise<Cliente[]> {
    return this.clientRepository.readClient(params);
  }
}
