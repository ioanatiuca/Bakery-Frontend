import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {User} from "./model/User";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // private url= 'http//localhost:8080/api/bakery';

  constructor(private httpClient: HttpClient) { }

  authenticate(username: string, password: string) {
    if (username === "admin" && password === "parola1234") {
      sessionStorage.setItem('username', username)
      return true;
    } else {
      return false;
    }

    // const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    // return this.httpClient.get<User>('http://localhost:8080/api/bakery/validateLogin',{headers}).pipe(
    //   map(
    //     userData => {
    //       sessionStorage.setItem('username',username);
    //       let authString = 'Basic ' + btoa(username + ':' + password);
    //       sessionStorage.setItem('basicauth', authString);
    //       return userData;
    //     }
    //   )
    // );
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }


  // loginClient(clientDTO: Object): Observable<Object> {
  //   return this.httpClient.post(`${this.url}`+"/login", clientDTO)
  // }
}
