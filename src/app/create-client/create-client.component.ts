import { Component, OnInit } from '@angular/core';
import {ClientDTO} from "../model/ClientDTO";
import {ClientServiceService} from "../client-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css']
})
export class CreateClientComponent implements OnInit {
  clientDTO: ClientDTO = new ClientDTO(); submitted = false;

  constructor(private clientService: ClientServiceService,
              private router: Router) { }

  ngOnInit(): void {
  }

  saveClient() {
    this.clientService.createClient(this.clientDTO).subscribe(response => {
      alert("Your account has been saved.");
    })
    this.clientDTO = new ClientDTO();
    this.goToClientList();
  }

  onSubmit() {
    this.submitted = true;
    this.saveClient();
  }

  private goToClientList() {
    this.router.navigate(['/login']);
  }

  updateClient() {
    this.clientService.updateClientDetails(this.clientDTO).subscribe(response=> {
      this.clientDTO=response as ClientDTO;
      this.clientDTO.email!=sessionStorage.getItem('email');
      console.log(response);
      return sessionStorage.getItem('email');
    })
  }
}
