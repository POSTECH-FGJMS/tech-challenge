import { ClientReadDto } from "../../../../core/domain/dtos/ClientReadDto";
import Cliente from "../../../../core/domain/entities/Cliente";
import { IClientRepository } from "../../../../core/domain/repositories/ClientRepository";

export class ClientRepository implements IClientRepository {
  readClient(params: ClientReadDto): Promise<Cliente> {
    throw new Error("Method not implemented. Should read a client in database.");
  }
}