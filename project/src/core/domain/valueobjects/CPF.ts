import IValueObject from "./IValueObject";

export default class CPF implements IValueObject {
  value: string;

  constructor(value: string) {
    this.value = value;
  }
}
