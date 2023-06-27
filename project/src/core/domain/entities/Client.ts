import CPF from "../valueobjects/CPF";
import Email from "../valueobjects/Email";
import IEntity from "./IEntity";

export default class Client implements IEntity {
  id: number;
  cpf: CPF;
  name: string;
  email: Email;

  constructor(id: number, cpf: CPF, name: string, email: Email) {
    this.id = id;
    this.cpf = cpf;
    this.name = name;
    this.email = email;
  }
}
