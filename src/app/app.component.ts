import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'bakery';
  public totalItem:number = 0;
  constructor(private cartService:CartService) {
  }
  ngOnInit(): void {
    this.getNumber();
  }

  getNumber() {
    this.cartService.getProducts().subscribe(res=>{
      this.totalItem=res.length;
    })
  }
}
