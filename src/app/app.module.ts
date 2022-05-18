import {forwardRef, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateClientComponent } from './create-client/create-client.component';
import { DeleteClientComponent } from './admin/delete-client.component';
import {FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import { OurStoryComponent } from './our-story/our-story.component';
import { ContactComponent } from './contact/contact.component';
import { ProductCategoriesComponent } from './product-categories/product-categories.component';
import { HomePageComponent } from './home-page/home-page.component';
import { OrderComponent } from './order/order.component';
import {OrderService} from "./order.service";
import {ProductService} from "./product.service";
import {ClientServiceService} from "./client-service.service";
import { LoginComponent } from './login/login.component';
import {XhrInterceptor} from "./xhrInterceptor";
import { LogoutComponent } from './logout/logout.component';
import { AccountComponent } from './account/account.component';
import { ProductsComponent } from './products/products.component';
import { AdminClientsComponent } from './admin-clients/admin-clients.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    CreateClientComponent,
    DeleteClientComponent,
    OurStoryComponent,
    ContactComponent,
    ProductCategoriesComponent,
    HomePageComponent,
    OrderComponent,
    LoginComponent,
    LogoutComponent,
    AccountComponent,
    ProductsComponent,
    AdminClientsComponent,
    AdminProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    ProductService,
    ClientServiceService,
    OrderService,
    CreateClientComponent,
    ProductCategoriesComponent,
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: OrderComponent,
      multi: true
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
