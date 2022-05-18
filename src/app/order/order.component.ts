import { Component, OnInit } from '@angular/core';
import {OrderDTO} from "../model/OrderDTO";
import {OrderService} from "../order.service";
import {Router} from "@angular/router";
import {OrderLineDTO} from "../model/OrderLineDTO";
import {ProductCategory} from "../product-categories/product-categories.component";
import {ProductDTO} from "../model/ProductDTO";
import {ProductService} from "../product.service";
import {ClientServiceService} from "../client-service.service";
import { CartService } from '../cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  public order: OrderDTO = new OrderDTO;
  public products: ProductDTO[] = [];
  public grandTotal!: number;

  constructor(private cartService: CartService, private orderService:OrderService) {
  }

  ngOnInit(): void {
    this.cartService.getProducts().subscribe(res=>{
      this.products=res;
      this.grandTotal=this.cartService.getTotalPrice();
    })

  }
  
  removeItem(item:any) {
    this.cartService.removeCartItem(item);
  }

  emptyCart() {
    this.cartService.removeAllCart();
  }

  saveOrder() {
    this.order.shoppingCart=this.cartService.cartItemList;
    this.order.orderNumber=this.generateOrderNumber();
    this.order.orderStatus='APPROVED';
    this.order.totalPrice=this.cartService.getTotalPrice();
    this.orderService.addNewOrder(this.order).subscribe(res=>{
      alert("Order has been APPROVED.")
    })
    this.emptyCart();
  }

  generateOrderNumber():number {
    let x=Math.random();
    return x*1000000;
  }
    
  }


  
