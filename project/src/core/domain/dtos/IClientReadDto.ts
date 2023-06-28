import Client from '../entities/Client'

export type IClientCreateDto = {
    cpf?: string
    name?: string
    email?: string
}

export type IClientReadDto = Partial<Client>
