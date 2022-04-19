import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {LoginService} from "../login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // model: any={};

  username = '';
  password = '';
  invalidLogin = false;

  constructor(private loginService: LoginService, private router:Router) {
  }
  ngOnInit(): void {
  }

  checkLogin() {
  //   (this.loginService.authenticate(this.username, this.password).subscribe({
  //     next : ()=> {this.router.navigate(['']), this.invalidLogin = false},
  //     error : ()=>{this.invalidLogin = true}
  // })
  //   );

    if (this.loginService.authenticate(this.username, this.password)
    ) {
      this.router.navigate([''])
      this.invalidLogin = false
    } else
      this.invalidLogin = true
  }

  // login() {
  //   let url='http://localhost:8080/api/bakery/*';
  //   let result = this.http.post(url, {
  //     userName: this.model.username,
  //     password: this.model.password
  //   }).subscribe(isValid =>{
  //     if (isValid) {
  //       sessionStorage.setItem(
  //         'token',btoa(this.model.username + ":" + this.model.password)
  //       );
  //       console.log(this.model.username, this.model.password);
  //       this.router.navigate(['/login']);
  //       alert(()=>{
  //         "Login successful."
  //       })
  //     } else {
  //       console.log(this.model.username, this.model.password);
  //       alert("Authentication failed.");
  //     }
  //   });
  // }


}
