import { IClientUseCase } from "../../../core/application/interfaces/ClientUseCase";
import Cliente from "../../../core/domain/entities/Cliente";

export class ClientController {
  constructor(private readonly clientUseCase: IClientUseCase) { }

  getUser(params: any): Promise<Cliente> {
    return this.clientUseCase.getClient({});
  }
}