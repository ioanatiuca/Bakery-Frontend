import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {User} from "./model/User";
import {ClientDTO} from "./model/ClientDTO";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  private url = 'http://localhost:8080/api/bakery/client/registration'

  authenticate (clientDTO: ClientDTO):Observable<Object> {
    return this.httpClient.post<ClientDTO>(`${this.url}`+'/login', clientDTO);
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('email')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('email')
  }
}
