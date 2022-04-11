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

  newClientDTO () : void {
    this.submitted = false;
    this.clientDTO = new ClientDTO();
  }

  saveClient() {
    this.clientService.createClient(this.clientDTO)
    this.clientDTO = new ClientDTO();
    this.goToClientList();
  }

  onSubmit() {
    this.submitted = true;
    this.saveClient();
  }

  private goToClientList() {
    this.router.navigate(['/client']);
  }
}
