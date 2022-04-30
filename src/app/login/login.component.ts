import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {LoginService} from "../login.service";
import {ClientDTO} from "../model/ClientDTO";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  clientDTO: ClientDTO = new ClientDTO();
  submitted = false;
  invalidLogin = false;

  constructor(private loginService: LoginService, private router:Router) {
  }
  ngOnInit(): void {
  }

  checkLogin() {
    this.loginService.authenticate(this.clientDTO).subscribe({
      next:(res)=>{
        this.clientDTO=res as ClientDTO;
        sessionStorage.setItem('email',this.clientDTO.email);
        this.invalidLogin=false;
        this.router.navigate(['/home']);
      },
      error:()=>{
        alert('Invalid credentials. Please try again.');
        this.invalidLogin=true;
      }
        });
  }

  onSubmit() {
    this.submitted = true;
    this.checkLogin();
  }

  private goToHome() {
    this.router.navigate(['/home']);
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
