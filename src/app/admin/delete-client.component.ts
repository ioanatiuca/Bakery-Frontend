import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { ClientServiceService } from '../client-service.service';
import { LoginService } from '../login.service';
import { LoginComponent } from '../login/login.component';
import { ClientDTO } from '../model/ClientDTO';
import { OrderDTO } from '../model/OrderDTO';
import { ProductDTO } from '../model/ProductDTO';
import { OrderService } from '../order.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-delete-client',
  templateUrl: './delete-client.component.html',
  styleUrls: ['./delete-client.component.css']
})
export class DeleteClientComponent implements OnInit {
  
  orders:OrderDTO[]=[];
  

  constructor(private router: Router, 
    private loginService: LoginService, 
    private productService: ProductService, 
    private orderService: OrderService, private adminService: AdminService) { }

  ngOnInit(): void {
  }

  checkLogin() {
    return this.loginService.isUserLoggedIn();
  }

  
  getAllOrders() {
    this.orderService.getAllOrders().subscribe(response=> {
      this.orders=response as OrderDTO[];
      console.log(response);
  }

    )

  }

  

  clearcontent(id: string) {
    document.getElementById(id)!.innerHTML="";
  }
}