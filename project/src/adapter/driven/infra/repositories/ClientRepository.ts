import { IClientReadDto } from "../../../../core/domain/dtos/IClientReadDto";
import Cliente from "../../../../core/domain/entities/Client";
import { IClientRepository } from "../../../../core/domain/repositories/IClientRepository";
import CPF from "../../../../core/domain/valueobjects/CPF";
import Email from "../../../../core/domain/valueobjects/Email";

export class ClientRepository implements IClientRepository {
  readClient(params: IClientReadDto): Promise<Cliente[]> {
    throw new Error("Method not implemented. Should read clients in database.");
  }
}
