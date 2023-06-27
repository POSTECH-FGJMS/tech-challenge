import { IClientUseCase } from "../../../core/application/interfaces/IClientUseCase";
import Cliente from "../../../core/domain/entities/Client";

export class ClientController {
  constructor(private readonly clientUseCase: IClientUseCase) {}

  getUser(params: any): Promise<Cliente[]> {
    return this.clientUseCase.getClient({});
  }
}
