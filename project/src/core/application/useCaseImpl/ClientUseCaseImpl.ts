import { ClientUseCases } from '../usecases/ClientUseCases'
import { ClientRepository } from '../../domain/repositories/ClientRepository'
import { Client, ClientRead } from '../../domain/entities/Client'
import { BadRequestException } from '../../../adapter/driver/errors/exceptions/BadRequestException'
import { CpfValidator } from '../validators/CpfValidator'
import { EmailValidator } from '../validators/EmailValidator'
import { NameValidator } from '../validators/NameValidator'

export class ClientUseCaseImpl implements ClientUseCases {
    constructor(
        private readonly clientRepository: ClientRepository,
        private readonly nameValidator: NameValidator,
        private readonly emailValidator: EmailValidator,
        private readonly cpfValidator: CpfValidator
    ) {}

    public async postClient(client: Client) {
        const { name, email, cpf } = client

        if (name && !this.nameValidator.isValid(name)) {
            throw new BadRequestException('name invalid')
        }

        if (email) {
            if (!this.emailValidator.isValid(email)) {
                throw new BadRequestException('email invalid')
            }

            const clientExist = await this.clientRepository.readClients({
                email,
            })

            if (clientExist.length > 0) {
                throw new BadRequestException('email already registered')
            }
        }

        if (cpf) {
            if (!this.cpfValidator.isValid(cpf)) {
                throw new BadRequestException('cpf invalid')
            }

            const userExist = await this.clientRepository.readClients({ cpf })

            if (userExist.length > 0) {
                throw new BadRequestException('cpf already registered')
            }
        }

        return await this.clientRepository.createClient(client)
    }

    public async getClients(params: ClientRead) {
        return await this.clientRepository.readClients(params)
    }
}
