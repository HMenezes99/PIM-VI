import { Component, OnInit } from '@angular/core';
import { firestore } from 'firebase-admin';
import { ISale } from 'src/app/model/sale.model';
import { SaleService } from 'src/app/service/sale-service.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss'],
})
export class SalesComponent implements OnInit {
  constructor(private saleService: SaleService) {}

  ngOnInit(): void {
    this.getSales();
  }
  sales!: ISale[];

  public async getSales() {
    const response = (await this.saleService.getSale()).map((element) => {
      return {
        ...element,
        created_at: (element.created_at as firestore.Timestamp)
          .toDate()
          .toISOString(),
      };
    });
    this.sales = response;
  }

  public paidSale(id: string) {
    this.saleService.paidSale(id);
  }

  public cancelSale(sale: ISale) {
    this.saleService.cancelSale(sale);
  }
}
