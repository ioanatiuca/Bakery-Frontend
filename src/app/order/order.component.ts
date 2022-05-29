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
import { LoginService } from '../login.service';
import { ClientDTO } from '../model/ClientDTO';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  public order: OrderDTO = new OrderDTO;
  public products: ProductDTO[] = [];
  public grandTotal!: number;
  submitted:boolean=false;
  today = new Date().toLocaleDateString('en-ca');
  email:string='';
  client:ClientDTO=new ClientDTO;

  constructor(private cartService: CartService, 
    private orderService:OrderService,
    private clientService:ClientServiceService) {
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
    let userEmail = sessionStorage.getItem('email');
    // this.order.clientDTOemail!=userEmail;
    // this.order=Object.assign(this.products);
    // console.log(JSON.stringify(this.order.shoppingCart));
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
  
  onSubmit() {
    this.submitted=true;
  }

  getClient() {
    this.email = sessionStorage.getItem('email')!;
    this.clientService.getClientByEmail(this.email).subscribe(res=>{
      this.client=res as ClientDTO;
      console.log(this.client);
    })
    return this.client;
  }
  }


  
