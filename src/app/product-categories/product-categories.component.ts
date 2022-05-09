import {Component, OnInit} from '@angular/core';
import {ProductService} from "../product.service";
import {ProductDTO} from "../model/ProductDTO";
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-categories',
  templateUrl: './product-categories.component.html',
  styleUrls: ['./product-categories.component.css']
})
export class ProductCategoriesComponent implements OnInit {

  categories: ProductCategory[] = [];
  products: ProductDTO[] = [];
  photo:number[]=[];

  prodMap: Map<number, ProductDTO[]> = new Map<number, ProductDTO[]>();


  constructor(private service: ProductService, private router: Router) {
  }

  ngOnInit(): void {
    this.getAllCategories();
  }

  getAllCategories() {
    this.service.getAllCategories().subscribe(response => {
      this.categories = response as ProductCategory[];
      console.log(response);
      for(let cat of this.categories) {
        this.prodMap.set(cat.id!, []);
      }});
  }

  getAllProductsInACategory(categoryName:string) {
    this.service.getProductsInACategory(categoryName).subscribe(response => {
      this.products = response as ProductDTO[];
      console.log(response);
    })
}

  clearcontent(id: string) {
    document.getElementById(id)!.innerHTML="";
  }

  getAllProducts (category: ProductCategory) {
    this.service.getAllProducts().subscribe(response => {
      this.products = response as ProductDTO[];
      console.log(response);
      for(let p of this.products) {
        var prods: ProductDTO[] = this.prodMap.get(category.id!)!;
        console.log(prods);
        prods.push(p);
        console.log(prods);
        this.prodMap.set(category.id!, prods);
        console.log(this.prodMap)
      }
    });
  }

  getCategoryPhoto (photoUrl:string) {
    this.service.getCategoryPhoto(photoUrl).subscribe(response => {
      this.photo=response as number[];
      console.log(response)
    })
  }

  addToCart() {
    this.router.navigate(['/order']);
  }

}
export class ProductCategory {
  id!: number;
  name!: string;
  description!: string;
  photoUrl!: string;
}


