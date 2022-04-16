import { Component, OnInit } from '@angular/core';
import {OrderDTO} from "../model/OrderDTO";
import {OrderService} from "../order.service";
import {Router} from "@angular/router";
import {OrderLineDTO} from "../model/OrderLineDTO";
import {ProductCategory} from "../product-categories/product-categories.component";
import {ProductDTO} from "../model/ProductDTO";
import {ProductService} from "../product.service";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orderDTO:OrderDTO =new OrderDTO(); submitted=false;
  orderLineDTO:OrderLineDTO=new OrderLineDTO();
  shoppingCart: OrderLineDTO[] = []; submittedCart=false;

  constructor(private orderService:OrderService, private productService: ProductService, private router:Router) {
  }

  ngOnInit(): void {

  }

  saveOrder() {
    // this.saveProduct(this.orderLineDTO);
    this.orderService.addNewOrder(this.orderDTO).subscribe(response => {
      alert("Comanda trimisa");
    })
    this.orderDTO = new OrderDTO();
    this.goToOrderList();
  }

  saveProduct(orderLineDTO:OrderLineDTO) {
    this.orderService.addNewProduct(orderLineDTO).subscribe(response => {
     orderLineDTO = response as OrderLineDTO;
     this.productService.getProductByName(this.getProductName()).subscribe(response=>{
       console.log(response);
     });
      this.shoppingCart.push(orderLineDTO);
      this.orderDTO.shoppingCart = this.shoppingCart;
      console.log(response);
    })
    orderLineDTO=new OrderLineDTO();
    this.goToCartList();
  }

  onSubmitProduct() {
    this.submittedCart=true;
    this.saveProduct(this.orderLineDTO);
  }

  onSubmit() {
    this.submitted = true;
    this.saveOrder();
  }
  private goToOrderList() {
    this.router.navigate(['/order']);
  }
  private goToCartList() {
    this.router.navigate(['/order/cart']);
  }

  calculatePrice(orderLineDTO: OrderLineDTO) {
    let product = this.orderLineDTO.product;
    let quantity = this.orderLineDTO.quantity;
    // @ts-ignore
    return price=product.price*quantity;
  }

  getProductName() {
    let product = this.orderLineDTO.product;
    return product.name;
  }
}
