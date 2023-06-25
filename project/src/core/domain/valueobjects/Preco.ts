import ValueObject from "./ValueObject";

export default class Preco implements ValueObject {
  value: string;

  constructor(value: string) {
    this.value = value;
  }
}