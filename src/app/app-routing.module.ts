import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateClientComponent} from "./create-client/create-client.component";

const routes: Routes = [
  { path: '', redirectTo: 'clientDTO', pathMatch: 'full' },
  { path: 'client', component: CreateClientComponent }
  // { path: 'client/:id', component: DeleteClientComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
