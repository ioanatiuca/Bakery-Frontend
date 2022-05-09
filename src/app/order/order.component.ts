import { Component, OnInit } from '@angular/core';
import {OrderDTO} from "../model/OrderDTO";
import {OrderService} from "../order.service";
import {Router} from "@angular/router";
import {OrderLineDTO} from "../model/OrderLineDTO";
import {ProductCategory} from "../product-categories/product-categories.component";
import {ProductDTO} from "../model/ProductDTO";
import {ProductService} from "../product.service";
import { FormGroup, FormControl } from '@angular/forms';
import {ClientServiceService} from "../client-service.service";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orderDTO:OrderDTO =new OrderDTO(); submitted=false;
  orderLineDTO:OrderLineDTO=new OrderLineDTO();
  shoppingCart: OrderLineDTO[] = []; submittedCart=false;
  products: ProductDTO[] = [];
  product: ProductDTO = new ProductDTO;
  formGroup: FormGroup = new FormGroup ({
    productName: new FormControl(''),
    quantity: new FormControl(0),
    totalPrice: new FormControl(0)
  }) ;

  

  constructor(private orderService:OrderService,
              private productService: ProductService,
              private router:Router) {
  }

  ngOnInit(): void {
    this.getAllProducts();
    this.orderLineDTO.totalPrice=0;
    const btn = document.querySelector('.push-to-add')

    let repeatingField = document.querySelector('.form');

    let newRepeating = document.createElement('section');
    newRepeating.className = 'form';

    let htmlElement = btn?.previousElementSibling?.appendChild(newRepeating);

  }
  getAllProducts () {
    this.productService.getAllProducts().subscribe(response => {
      this.products=response as ProductDTO[];
      console.log(response);
      }
    )
  }

  saveOrder() {
    this.orderService.addNewOrder(this.orderDTO).subscribe(response => {
      alert("Order approved.");
    })
    this.orderDTO = new OrderDTO();
    this.goToOrderList();
  }

  addNewOrderLine(orderLineDTO:OrderLineDTO) {
    this.orderService.addNewOrderLine(orderLineDTO).subscribe(response => {
     this.orderLineDTO.product=this.product;
     console.log(this.product);
     this.orderLineDTO = response as OrderLineDTO;
     console.log(response);
     this.shoppingCart.push(this.orderLineDTO);
    })
  }

  onSubmitProduct() {
    this.submittedCart=true;
    this.addNewOrderLine(this.orderLineDTO);
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

  getOrderLineTotalPrice(orderLineDTO:OrderLineDTO) {
    this.orderService.getOrderLineTotalPrice(orderLineDTO).subscribe(response => {
      this.orderLineDTO.totalPrice=response as number;
      console.log(response);
    })
  }

  onChangeUpdatePrice(productPrice: number, quantity: number) {
    this.orderLineDTO.totalPrice= productPrice*quantity;
    }
  }


  
