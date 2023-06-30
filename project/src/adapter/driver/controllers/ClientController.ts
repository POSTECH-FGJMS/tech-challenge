import { Request, Response } from 'express'
import { IClientUseCase } from '../../../core/application/interfaces/IClientUseCase'

export class ClientController {
    constructor(private readonly clientUseCase: IClientUseCase) {}

    public async getUser(request: Request, response: Response) {
        const clients = await this.clientUseCase.getClient({})
        response.json(clients)
    }

    public async postUser(request: Request, response: Response) {
        const client = await this.clientUseCase.postClient({ ...request.body })
        response.json(client)
    }
}
