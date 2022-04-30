import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {ClientDTO} from "./model/ClientDTO";

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {

  // private url= '/api/bakery';

  constructor(private httpClient: HttpClient) { }

  getAllClients() {
    return this.httpClient.get<ClientDTO[]>('http://localhost:8080/api/bakery/client');
  }

  public deleteClient(clientDTO: { email: string; }) {
    return this.httpClient.delete<ClientDTO>("http://localhost:8080/api/bakery/client" + "/"+ clientDTO.email);
  }

  public createClient(clientDTO: ClientDTO) {
    return this.httpClient.post<ClientDTO>("http://localhost:8080/api/bakery/client/registration/new", clientDTO);
  }

  // getAllClients():Observable<any> {
  //   return this.httpClient.get(`${this.url}`)
  // }
  //
  // createClient(clientDTO: Object): Observable<Object> {
  //   return this.httpClient.post(`${this.url}`+"/client", clientDTO);
  // }

}
