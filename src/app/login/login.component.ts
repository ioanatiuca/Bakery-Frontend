import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any={};

  constructor(private route: ActivatedRoute,
              private router: Router,
              private http:HttpClient) { }

  ngOnInit(): void {
    sessionStorage.setItem('token','');
  }

  login() {
    let url='http://localhost:8080/api/bakery/*';
    let result = this.http.post(url, {
      userName: this.model.username,
      password: this.model.password
    }).subscribe(isValid =>{
      if (isValid) {
        sessionStorage.setItem(
          'token',btoa(this.model.username + ":" + this.model.password)
        );
        console.log(this.model.username, this.model.password);
        this.router.navigate(['/login']);
        alert(()=>{
          "Login successful."
        })
      } else {
        console.log(this.model.username, this.model.password);
        alert("Authentication failed.");
      }
    });
  }

  // authenticated = false;
  //
  // constructor(private http: HttpClient) {
  // }
  //
  // authenticate(credentials: { username: string; password: string; }, callback: () => any) {
  //
  //   const headers = new HttpHeaders(credentials ? {
  //     authorization : 'Basic ' + btoa(credentials.username + ':' + credentials.password)
  //   } : {});
  //
  //   this.http.get('user', {headers: headers}).subscribe(response => {
  //     if (response['name']) {
  //       this.authenticated = false;
  //     } else {
  //       this.authenticated = true;
  //     }
  //     return callback && callback();
  //   });
  //
  // }

// }
}
