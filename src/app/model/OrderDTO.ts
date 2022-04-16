import {OrderLineDTO} from "./OrderLineDTO";

export class OrderDTO {
  orderID: number|undefined;
  orderDate: Date|undefined;
  deliveryDate: Date|undefined;
  shoppingCart: OrderLineDTO[]|undefined
}
