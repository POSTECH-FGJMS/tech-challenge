import Client from '../entities/Client'

export type IClientCreateDto = Omit<Client, 'id'>;
export type IClientReadDto = Partial<Client>;
