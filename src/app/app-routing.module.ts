import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateClientComponent} from "./create-client/create-client.component";
import {OurStoryComponent} from "./our-story/our-story.component";
import {ContactComponent} from "./contact/contact.component";
import {ProductCategoriesComponent} from "./product-categories/product-categories.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {OrderComponent} from "./order/order.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  // { path: '**', redirectTo: '', pathMatch: 'full' },
  { path: 'client', component: CreateClientComponent },
  { path: 'story', component: OurStoryComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'product', component: ProductCategoriesComponent },
  { path: '', component:HomePageComponent},
  { path: 'home', component: HomePageComponent},
  { path: 'order', component:OrderComponent},
  { path: 'login', component: LoginComponent}
  // { path: 'client/:id', component: DeleteClientComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
