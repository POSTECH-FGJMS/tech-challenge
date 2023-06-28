import CPF from "../valueobjects/CPF";
import Email from "../valueobjects/Email";
import Entity from "./Entity";

export default class Cliente implements Entity {
  id: string;
  cpf: CPF;
  nome: string;
  email: Email;

  constructor(id: string, cpf: CPF, nome: string, email: Email) {
    this.id = id;
    this.cpf = cpf;
    this.nome = nome;
    this.email = email;
  }
}
