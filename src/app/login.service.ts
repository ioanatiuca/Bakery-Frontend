import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url= '/api/bakery';

  constructor(private httpClient: HttpClient) { }

  loginClient(clientDTO: Object): Observable<Object> {
    return this.httpClient.post(`${this.url}`+"/login", clientDTO)
  }
}
