import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductDTO } from '../model/ProductDTO';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {

  products:ProductDTO[]=[];
  
  constructor(private router:Router, private productService:ProductService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productService.getAllProducts().subscribe(response=> {
      this.products=response as ProductDTO[];
      console.log(response);
  })
  }
}
