import ValueObject from "./ValueObject";

export default class Email implements ValueObject {
  value: string;

  constructor(value: string) {
    this.value = value;
  }
}
