import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {

  private url= 'http://localhost:8080/api/bakery/client';
  constructor(private httpClient: HttpClient) { }

  createClient(clientDTO: Object): Observable<Object> {
    return this.httpClient.post(`${this.url}`, clientDTO);
  }
}
