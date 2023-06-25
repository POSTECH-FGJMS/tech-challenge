import ValueObject from "./ValueObject";

export default class Categoria implements ValueObject {
  nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }
}
