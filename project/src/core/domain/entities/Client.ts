import IEntity from './IEntity'
export interface Client {
    name?: string
    email?: string
    cpf?: string
}

export type ClientEntity = Client & IEntity
export type ClientRead = Partial<Client & IEntity> 


