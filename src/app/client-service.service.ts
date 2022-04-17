import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {

  private url= '/api/bakery';

  constructor(private httpClient: HttpClient) { }

  getAllClients():Observable<any> {
    return this.httpClient.get(`${this.url}`)
  }

  createClient(clientDTO: Object): Observable<Object> {
    return this.httpClient.post(`${this.url}`+"/client", clientDTO);
  }

}
