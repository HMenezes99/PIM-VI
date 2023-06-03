import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/model/product.model';
import { ProductService } from 'src/app/service/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor(private productService: ProductService) {}

  async ngOnInit() {}

  product: IProduct = {
    category: '',
    name: '',
    maker: '',
    assurance: 0,
    quantity: 0,
    barcode: '',
  };

  async submitForm() {
    try {
      if (!this.product.name) {
        alert('Não pode criar produto sem preencher os campos!');
        return;
      }
      await this.productService
        .createProduct(this.product)
        .then(() => alert('Cadastrado!'))
        .catch(() => {
          alert('Erro!');
        });
    } catch (error) {
      alert('erro ao criar produto');
    }
  }
}
