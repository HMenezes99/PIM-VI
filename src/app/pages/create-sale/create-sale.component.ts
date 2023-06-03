import { Component, OnInit } from '@angular/core';
import { ISale } from 'src/app/model/sale.model';
import { SalesComponent } from '../sales/sales.component';
import { SaleService } from 'src/app/service/sale-service.service';
import { IUser } from 'src/app/model/user.model';
import { UserService } from 'src/app/service/user-service.service';
import { ProductService } from 'src/app/service/products.service';
import { IProduct } from 'src/app/model/product.model';

@Component({
  selector: 'app-create-sale',
  templateUrl: './create-sale.component.html',
  styleUrls: ['./create-sale.component.scss'],
})
export class CreateSaleComponent implements OnInit {
  constructor(
    private saleService: SaleService,
    private userService: UserService,
    private productService: ProductService
  ) {}

  async ngOnInit() {
    this.products = await this.productService.getProducts();
  }
  formData: ISale = {
    id: '',
    status: '',
    created_at: new Date(),
    paymentType: '',
    value: '',
    productName: '',
  };
  user: IUser = {
    name: '',
    rg: '',
    cpf: '',
    phone: '',
    email: '',
    address: '',
    created_at: new Date(),
  };
  products?: IProduct[];

  async submitForm() {
    try {
      if (!this.user.name) {
        alert('Necessário encontrar cliente antes de realizar a venda!');
        return;
      }
      await this.saleService.createSale(this.formData);
      alert('Criado!');
    } catch (error) {
      alert('Ocorreu um erro ao cadastrar o cliente');
    }
  }

  async getUser() {
    try {
      this.user = (
        await this.userService.getUserByCpf(this.user.cpf)
      )[0] as IUser;
    } catch (error) {
      alert(error);
    }
  }
}
