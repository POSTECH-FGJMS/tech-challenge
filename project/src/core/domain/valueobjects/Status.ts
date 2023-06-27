import IValueObject from "./IValueObject";

export default class Status implements IValueObject {
  value: string;

  constructor(value: string) {
    this.value = value;
  }
}
