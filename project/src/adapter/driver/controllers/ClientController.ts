import { Request, Response } from 'express'
import { IClientUseCase } from '../../../core/application/interfaces/IClientUseCase'
import { ClientRead } from '../../../core/domain/entities/Client'

export class ClientController {
    constructor(private readonly clientUseCase: IClientUseCase) {}

    public async getUser(request: Request, response: Response) {
        const { id, name, email, cpf } = request.query
        const clients = await this.clientUseCase.getClient({
            id,
            name,
            email,
            cpf,
        } as ClientRead)

        response.json(clients)
    }

    public async postUser(request: Request, response: Response) {
        const client = await this.clientUseCase.postClient({ ...request.body })

        response.json(client)
    }
}
