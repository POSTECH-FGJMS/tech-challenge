import { Request, Response } from "express";
import { IClientUseCase } from "../../../core/application/interfaces/ClientUseCase";
import Cliente from "../../../core/domain/entities/Cliente";

export class ClientController {
  constructor(private readonly clientUseCase: IClientUseCase) { }

  public async getUser(request: Request, response: Response): Promise<Cliente[]> {
    return await this.clientUseCase.getClient({});
  }
}