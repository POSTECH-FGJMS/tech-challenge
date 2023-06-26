import { ClientReadDto } from "../../../../core/domain/dtos/ClientReadDto";
import Cliente from "../../../../core/domain/entities/Cliente";
import { IClientRepository } from "../../../../core/domain/repositories/ClientRepository";
import CPF from "../../../../core/domain/valueobjects/CPF";
import Email from "../../../../core/domain/valueobjects/Email";

export class ClientRepository implements IClientRepository {
  readClient(params: ClientReadDto): Promise<Cliente[]> {
    throw new Error("Method not implemented. Should read clients in database.");
  }
}