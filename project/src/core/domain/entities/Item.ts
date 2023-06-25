import Categoria from "../valueobjects/Categoria";
import Preco from "../valueobjects/Preco";
import Entity from "./Entity";

export default class Item implements Entity {
  id: number;
  nome: string;
  descricao: string;
  preco: Preco;
  categoria: Categoria;
  pedidoId: string;

  constructor(
    nome: string,
    descricao: string,
    preco: Preco,
    categoria: Categoria,
    pedidoId: string
  ) {
    this.id = Math.random();
    this.nome = nome;
    this.descricao = descricao;
    this.preco = preco;
    this.categoria = categoria;
    this.pedidoId = pedidoId;
  }
}
