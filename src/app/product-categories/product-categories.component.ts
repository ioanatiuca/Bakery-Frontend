import {Component, OnInit} from '@angular/core';
import {ProductService} from "../product.service";
import {ProductDTO} from "../model/ProductDTO";

@Component({
  selector: 'app-product-categories',
  templateUrl: './product-categories.component.html',
  styleUrls: ['./product-categories.component.css']
})
export class ProductCategoriesComponent implements OnInit {

  categories: ProductCategory[] = [];
  products: ProductDTO[] = []

  prodMap: Map<number, ProductDTO[]> = new Map<number, ProductDTO[]>();


  constructor(private service: ProductService) {
  }

  ngOnInit(): void {
    this.service.getAllCategories().subscribe(response => {
      this.categories = response as ProductCategory[];
      console.log(response);
      for(let cat of this.categories) {
        this.prodMap.set(cat.id!, []);
      }});

      this.service.getAllProducts().subscribe(response => {
        this.products = response as ProductDTO[];
        console.log(response);
        for(let p of this.products) {
          var prods: ProductDTO[] = this.prodMap.get(p.category!.id!)!;
          console.log(prods);
          prods.push(p);
          console.log(prods);
          this.prodMap.set(p.category!.id!, prods);
          console.log(this.prodMap)
        }
      });
  }

  addToCart(product: ProductDTO) {
    console.log(product)
  }
}

export class ProductCategory {
  id: number | undefined;
  name: string | undefined;
  description: string | undefined;
}


