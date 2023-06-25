import ValueObject from "./ValueObject";

export default class Status implements ValueObject {
  nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }
}
