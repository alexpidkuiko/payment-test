import { Component, OnInit } from '@angular/core';
import { PaymentTableService } from './utils/services/payment-table-service';
import { Observable } from 'rxjs';
import { IPaymentTableColumn, IPaymentTableRow } from './utils/interfaces/payment-table-interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public rowData: Observable<IPaymentTableRow[]>;
  public columnData: Observable<IPaymentTableColumn[]>;

  constructor(private paymentTableService: PaymentTableService) {}

  public ngOnInit(): void {
    this.rowData = this.paymentTableService.getTableRowData();
    this.columnData = this.paymentTableService.getTableColumnData();
  }

  public removeTableRow(index: number): void {
    this.paymentTableService.removeRow(index);
  }

  public addPaymentData(data: IPaymentTableRow): void {
    this.paymentTableService.addRow(data);
  }
}
