import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateClientComponent} from "./create-client/create-client.component";
import {OurStoryComponent} from "./our-story/our-story.component";
import {ContactComponent} from "./contact/contact.component";
import {ProductCategoriesComponent} from "./product-categories/product-categories.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {OrderComponent} from "./order/order.component";
import {LoginComponent} from "./login/login.component";
import {LogoutComponent} from "./logout/logout.component";
import {AccountComponent} from "./account/account.component";
import {AuthGuardService} from "./auth-guard.service";
import { DeleteClientComponent } from './admin/delete-client.component';
import { AdminClientsComponent } from './admin-clients/admin-clients.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  { path: 'client', component: CreateClientComponent },
  { path: 'story', component: OurStoryComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'product/category', component: ProductCategoriesComponent},
  { path: 'product/category/:name', component:ProductsComponent},
  { path: '', component:HomePageComponent},
  { path: 'home', component: HomePageComponent},
  { path: 'order', component:OrderComponent, canActivate: [AuthGuardService]},
  { path: 'login', component: LoginComponent},
  { path: 'logout', component: LogoutComponent},
  { path: 'account', component: AccountComponent},
  { path: 'admin', component: DeleteClientComponent, canActivate: [AuthGuardService]}, //=admincomponent
  { path: 'admin-clients', component: AdminClientsComponent, canActivate: [AuthGuardService]},
  { path: 'admin-products', component: AdminProductsComponent, canActivate: [AuthGuardService]}
  // { path: 'client/:id', component: DeleteClientComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
