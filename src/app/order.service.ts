import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {OrderDTO} from "./model/OrderDTO";
import {Injectable} from "@angular/core";
import {OrderLineDTO} from "./model/OrderLineDTO";

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private url = 'http://localhost:8080/api/bakery/order';

  constructor(private httpClient: HttpClient) {
  }

  addNewOrder(orderDTO: OrderDTO): Observable<Object> {
    return this.httpClient.post(`${this.url}`+'/add', orderDTO);
  }

  getAllOrders (): Observable<Object> {
    return this.httpClient.get(`${this.url}`+'/all')
  }

  cancelOrderByNumber(orderDTONumber: number):Observable<Object> {
    return this.httpClient.post(`${this.url}`+'/cancel/'+ orderDTONumber.toString(), orderDTONumber);
  }

  addNewOrderLine (orderLineDTO: OrderLineDTO):Observable<Object> {
    return this.httpClient.post(`${this.url}`+'/cart/add',orderLineDTO)
  }

  getAllOrderLines ():Observable<Object> {
    return this.httpClient.get(`${this.url}`+'/cart/all')
  }

  updateOrderLine (orderLineDTO: OrderLineDTO) : Observable<Object> {
    return this.httpClient.post(`${this.url}`+'/cart/update',orderLineDTO)
  }

  deleteOrderLine (orderLineDTO:OrderLineDTO): Observable<Object> {
    return this.httpClient.delete(`${this.url}`+'cart/delete')
  }

  getOrderLineTotalPrice(orderLineDTO: OrderLineDTO): Observable<Object> {
    return this.httpClient.get(`${this.url}`+'/cart/price')
  }
}
