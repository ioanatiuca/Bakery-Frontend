import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateClientComponent} from "./create-client/create-client.component";
import {OurStoryComponent} from "./our-story/our-story.component";
import {ContactComponent} from "./contact/contact.component";
import {ProductCategoriesComponent} from "./product-categories/product-categories.component";

const routes: Routes = [
  { path: '', redirectTo: 'clientDTO', pathMatch: 'full' },
  { path: 'client', component: CreateClientComponent },
  { path: 'story', component: OurStoryComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'product', component: ProductCategoriesComponent }
  // { path: 'client/:id', component: DeleteClientComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
