import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientServiceService } from '../client-service.service';
import { ClientDTO } from '../model/ClientDTO';

@Component({
  selector: 'app-admin-clients',
  templateUrl: './admin-clients.component.html',
  styleUrls: ['./admin-clients.component.css']
})
export class AdminClientsComponent implements OnInit {

  clients:ClientDTO[]=[];
  client:ClientDTO=new ClientDTO;
  
  constructor(private router: Router, private clientService:ClientServiceService) { }

  ngOnInit(): void {
    this.getAllClients();
  }


  getAllClients() {
    this.clientService.getAllClients().subscribe(response=> {
        this.clients=response as ClientDTO[];
        console.log(response);
    }
    );
}

  updateClientDetails(client:ClientDTO) {
    this.clientService.updateClientDetails(client).subscribe(response=>{
      this.client=response as ClientDTO;
      console.log(response);
    })
  }

  
}
