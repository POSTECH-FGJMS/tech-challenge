import Status from "../valueobjects/Status";
import Entity from "./Entity";

export default class Pedido implements Entity {
  id: number;
  pedidoId: number;
  nome: string;
  descricao: string;
  preco: string;
  status: Status;
  clienteId: number;

  constructor(
    pedidoId: number,
    nome: string,
    descricao: string,
    preco: string,
    status: Status,
    clienteId: number
  ) {
    this.id = Math.random();
    this.pedidoId = pedidoId;
    this.nome = nome;
    this.descricao = descricao;
    this.preco = preco;
    this.status = status;
    this.clienteId = clienteId;
  }
}
