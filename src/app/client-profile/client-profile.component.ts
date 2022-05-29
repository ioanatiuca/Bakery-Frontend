import { Component, OnInit } from '@angular/core';
import { ClientServiceService } from '../client-service.service';
import { ClientDTO } from '../model/ClientDTO';

@Component({
  selector: 'app-client-profile',
  templateUrl: './client-profile.component.html',
  styleUrls: ['./client-profile.component.css']
})
export class ClientProfileComponent implements OnInit {

  email:string='';
  client:ClientDTO=new ClientDTO;
  constructor(private clientService:ClientServiceService) { }

  ngOnInit(): void {
    this.getClient();
  }

  getClient() {
    this.email = sessionStorage.getItem('email')!;
    this.clientService.getClientByEmail(this.email).subscribe(res=>{
      this.client=res as ClientDTO;
      console.log(this.client);
    })
  }
}
