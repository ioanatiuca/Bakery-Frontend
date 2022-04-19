import {OrderLineDTO} from "./OrderLineDTO";

export class OrderDTO {
  orderID!: number;
  orderDate!: Date;
  deliveryDate!: Date;
  shoppingCart!: OrderLineDTO[];
}
