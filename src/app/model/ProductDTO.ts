import {ProductCategory} from "../product-categories/product-categories.component";

export class ProductDTO {
  productId:number|undefined;
  category:ProductCategory|undefined;
  name!:String;
  price:Number|undefined;
}
