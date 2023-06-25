import ValueObject from "./ValueObject";

export default class CPF implements ValueObject {
  value: string;

  constructor(value: string) {
    this.value = value;
  }
}
