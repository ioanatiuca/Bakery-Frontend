import { Component, OnInit } from '@angular/core';
import {LoginService} from "../login.service";
import {ClientServiceService} from "../client-service.service";
import {CreateClientComponent} from "../create-client/create-client.component";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(public loginService: LoginService, public clientService: ClientServiceService,
              public client: CreateClientComponent) {
  }

  ngOnInit(): void {
  }



}
