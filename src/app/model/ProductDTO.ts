import {ProductCategory} from "../product-categories/product-categories.component";

export class ProductDTO {
  productId!:number;
  category!:ProductCategory;
  name!:string;
  price!:number;
}
