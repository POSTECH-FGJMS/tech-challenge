import Entity from './Entity'
export interface Client {
    name?: string
    email?: string
    cpf?: string
}

export type ClientEntity = Client & Entity
export type ClientRead = Partial<ClientEntity>
