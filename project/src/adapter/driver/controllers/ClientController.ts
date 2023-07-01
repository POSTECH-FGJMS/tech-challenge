import { Request, Response } from 'express'
import { ClientUseCases } from '../../../core/application/usecases/ClientUseCases'

export class ClientController {
    constructor(private readonly clientUseCase: ClientUseCases) {}

    public async getUsers(request: Request, response: Response) {
        const clients = await this.clientUseCase.getClients(request.query)

        response.json(clients)
    }

    public async postUser(request: Request, response: Response) {
        const client = await this.clientUseCase.postClient(request.body)

        response.json(client)
    }
}
