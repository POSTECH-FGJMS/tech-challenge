import IValueObject from "./IValueObject";

export default class Category implements IValueObject {
  value: string;

  constructor(value: string) {
    this.value = value;
  }
}
