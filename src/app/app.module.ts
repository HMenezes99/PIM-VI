import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginPage } from './pages/login/login.page';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import firebase from 'firebase/app';
import { environment } from 'src/environments/environment';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { UsersComponent } from './pages/users/users.component';
import { StockComponent } from './pages/stock/stock.component';
import { SalesComponent } from './pages/sales/sales.component';
import { ProductService } from './service/products.service';
import { UserService } from './service/user-service.service';
import { NgxMaskModule } from 'ngx-mask';
import { CreateSaleComponent } from './pages/create-sale/create-sale.component';
import { SaleService } from './service/sale-service.service';

firebase.initializeApp(environment.firebase);

@NgModule({
  declarations: [
    AppComponent,
    LoginPage,
    HomeComponent,
    ProductsComponent,
    UsersComponent,
    StockComponent,
    SalesComponent,
    CreateSaleComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [ProductService, UserService, SaleService],
  bootstrap: [AppComponent],
})
export class AppModule {}
