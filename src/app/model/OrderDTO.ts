import { ProductDTO } from "./ProductDTO";

export class OrderDTO {
  orderID!: number;
  orderNumber!:number;
  orderDate!: Date;
  deliveryDate!: Date;
  shoppingCart!: ProductDTO[];
  orderStatus!:string;
  totalPrice!:number;
}
