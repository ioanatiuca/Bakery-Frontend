import {ProductDTO} from "./ProductDTO";

export class OrderLineDTO {
  orderLineId!: number;
  product!:ProductDTO;
  quantity!:number;
  totalPrice!:number;
}
