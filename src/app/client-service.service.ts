import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {ClientDTO} from "./model/ClientDTO";

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {

  constructor(private httpClient: HttpClient) { }

  getAllClients():Observable<Object> {
    return this.httpClient.get('http://localhost:8080/api/bakery/admin/client/all');
  }

  public deleteClient(id:number){
    return this.httpClient.delete('http://localhost:8080/api/bakery/admin/client/'+ id);
  }

  public createClient(clientDTO: ClientDTO): Observable<Object> {
    return this.httpClient.post("http://localhost:8080/api/bakery/client/registration/new", clientDTO);
  }

  public updateClientDetails (clientDTO: ClientDTO): Observable<Object> {
    return this.httpClient.post('http://localhost:8080/api/bakery/admin/client/'+clientDTO.email, clientDTO);
  }

  public getClientByEmail(email:String):Observable<Object> {
    return this.httpClient.get('http://localhost:8080/api/bakery/client/'+email);
  }
}
