import CPF from "../valueobjects/CPF";
import Email from "../valueobjects/Email";
import Entity from "./Entity";

export default class Cliente implements Entity {
  id: number;
  cpf: CPF;
  nome: string;
  email: Email;

  constructor(cpf: CPF, nome: string, email: Email) {
    this.id = Math.random();
    this.cpf = cpf;
    this.nome = nome;
    this.email = email;
  }
}
