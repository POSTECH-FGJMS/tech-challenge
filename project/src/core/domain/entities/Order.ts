import Price from "../valueobjects/Price";
import Status from "../valueobjects/Status";
import IEntity from "./IEntity";

export default class Order implements IEntity {
  id: number;
  name: string;
  description: string;
  price: Price;
  status: Status;
  clientId: number;

  constructor(
    id: number,
    name: string,
    description: string,
    price: Price,
    status: Status,
    clientId: number
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.status = status;
    this.clientId = clientId;
  }
}
