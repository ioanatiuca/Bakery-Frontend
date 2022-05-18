import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = 'http://localhost:8080/api/bakery/product';

  constructor(private httpClient: HttpClient) {
  }

  getAllCategories(): Observable<Object> {
    return this.httpClient.get(`${this.url}` + "/category");
  }

  getAllProducts(): Observable<Object> {
    return this.httpClient.get(`${this.url}` + "/all");
  }

  getProductByName(name:String): Observable<Object> {
    return this.httpClient.get(`${this.url}`+"/"+name)
  }

  getProductsInACategory(categoryId:number): Observable<Object> {
    return this.httpClient.get(`${this.url}`+"/category/"+categoryId)
  }

  getCategoryPhoto(photoUrl:string): Observable<Object> {
    return this.httpClient.get(photoUrl)
  }
}
