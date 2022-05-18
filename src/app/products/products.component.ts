import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { ProductDTO } from '../model/ProductDTO';
import { ProductCategoriesComponent, ProductCategory } from '../product-categories/product-categories.component';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  categories:ProductCategory[]=[];
  products:ProductDTO[]=[];
  constructor(private router:Router, 
    private productService:ProductService,
    private cartService:CartService) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(res=>{
      this.products=res as ProductDTO[];
      console.log(res);
      this.products.forEach((a:ProductDTO)=>
      Object.assign(a, {quantity:1, total:a.price})
      )
    })
  }

  addToCart(product:ProductDTO) {
      this.cartService.addToCart(product)
  }

  getAllProductsInACategory(categoryId:number):ProductDTO[] {
    this.productService.getProductsInACategory(categoryId).subscribe(response => {
      this.products = response as ProductDTO[];
      console.log(response);
    })
    return this.products;
  }
   
  getAllCategories() {
    this.productService.getAllCategories().subscribe(response => {
      this.categories = response as ProductCategory[];
      console.log(response);
      });
  }

}
