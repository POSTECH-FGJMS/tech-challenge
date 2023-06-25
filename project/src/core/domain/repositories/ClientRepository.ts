import { ClientReadDto } from "../dtos/ClientReadDto";
import Cliente from "../entities/Cliente";

export interface IClientRepository {
  readClient(params: ClientReadDto): Promise<Cliente>;
}