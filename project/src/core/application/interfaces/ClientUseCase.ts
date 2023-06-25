import { ClientReadDto } from "../../domain/dtos/ClientReadDto";
import Cliente from "../../domain/entities/Cliente";

export interface IClientUseCase {
  getClient(params: ClientReadDto): Promise<Cliente>;
}