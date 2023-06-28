import { Request, Response } from 'express'
import Client from '../../../core/domain/entities/Client'
import { IClientUseCase } from '../../../core/application/interfaces/IClientUseCase'

export class ClientController {
    constructor(private readonly clientUseCase: IClientUseCase) {}

    public getUser(request: Request, response: Response): Promise<Client[]> {
        return this.clientUseCase.getClient({})
    }

    public postUser(request: Request, response: Response): Promise<Client> {
        return this.clientUseCase.postClient({ ...request.body })
    }
}
