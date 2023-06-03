import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/model/product.model';
import { ProductService } from 'src/app/service/products.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss'],
})
export class StockComponent implements OnInit {
  public stockItems!: IProduct[];
  constructor(private productsService: ProductService) {}
  async ngOnInit() {
    this.stockItems = await this.productsService.getProducts();
  }
}
