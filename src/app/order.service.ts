import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {OrderDTO} from "./model/OrderDTO";
import {Injectable} from "@angular/core";
import {OrderLineDTO} from "./model/OrderLineDTO";

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private url = '/api/bakery/order';

  constructor(private httpClient: HttpClient) {
  }

  addNewOrder(orderDTO: OrderDTO): Observable<Object> {
    return this.httpClient.post(`${this.url}`, orderDTO);
  }

  getAllOrders (): Observable<Object> {
    return this.httpClient.get(`${this.url}`)
  }

  addNewProduct(orderLineDTO: OrderLineDTO):Observable<Object> {
    return this.httpClient.post(`${this.url}`+"/cart", orderLineDTO);
  }
}
