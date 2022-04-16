import {ProductDTO} from "./ProductDTO";

export class OrderLineDTO {
  orderLineId: number|undefined;
  product!:ProductDTO;
  quantity:number|undefined;
  totalPrice:number|undefined;
}
