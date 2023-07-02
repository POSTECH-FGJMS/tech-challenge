import { ClientUseCases } from '../usecases/ClientUseCases'
import { ClientRepository } from '../../domain/repositories/ClientRepository'
import { Client, ClientRead } from '../../domain/entities/Client'
import { BadRequestExeption } from '../../../adapter/driver/errors/exeptions/BadRequestExeption'
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
            throw new BadRequestExeption('name invalid')
        }

        if (email) {
            if (!this.emailValidator.isValid(email)) {
                throw new BadRequestExeption('email invalid')
            }

            const clientExist = await this.clientRepository.readClients({
                email,
            })

            if (clientExist.length > 0) {
                throw new BadRequestExeption('email already registered')
            }
        }

        if (cpf) {
            if (!this.cpfValidator.isValid(cpf)) {
                throw new BadRequestExeption('cpf invalid')
            }

            const userExist = await this.clientRepository.readClients({ cpf })

            if (userExist.length > 0) {
                throw new BadRequestExeption('cpf already registered')
            }
        }

        return await this.clientRepository.createClient(client)
    }

    public async getClients(params: ClientRead) {
        return await this.clientRepository.readClients(params)
    }
}
