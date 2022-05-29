import { Component, OnInit } from '@angular/core';
import { OrderDTO } from '../model/OrderDTO';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent implements OnInit {

  orders: OrderDTO[]=[];
  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.orderService.getAllOrders().subscribe(res=> {
      this.orders=res as OrderDTO[];
      console.log(res);
    })
  }

}
