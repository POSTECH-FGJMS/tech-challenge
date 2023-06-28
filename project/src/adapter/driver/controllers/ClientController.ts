import { Request, Response } from "express";
import Client from "../../../core/domain/entities/Client";
import { IClientUseCase } from "../../../core/application/interfaces/IClientUseCase";

export class ClientController {
  constructor(private readonly clientUseCase: IClientUseCase) { }

  public async getUser(request: Request, response: Response): Promise<Client[]> {
    return await this.clientUseCase.getClient({});
  }
}
