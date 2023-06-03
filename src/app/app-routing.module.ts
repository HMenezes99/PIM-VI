import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginPage } from './pages/login/login.page';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { UsersComponent } from './pages/users/users.component';
import { StockComponent } from './pages/stock/stock.component';
import { SalesComponent } from './pages/sales/sales.component';
import { CreateSaleComponent } from './pages/create-sale/create-sale.component';

const routes: Routes = [
  {
    path: '',
    component: LoginPage,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
  },
  {
    path: 'stock',
    component: StockComponent,
  },
  {
    path: 'sales',
    component: SalesComponent,
  },
  {
    path: 'create-sale',
    component: CreateSaleComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
