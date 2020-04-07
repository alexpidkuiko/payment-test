import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IPaymentTableRow } from '../interfaces/payment-table-interfaces';
import { TABLE_COLUMN_DATA } from '../constants/payment-table-consts';

@Injectable({
  providedIn: 'root'
})
export class PaymentTableService {
  public tableRowData$ = new BehaviorSubject([]);
  public tableColumnData$ = new BehaviorSubject(TABLE_COLUMN_DATA);

  constructor() {}

  public addRow(currentData: IPaymentTableRow): void {
    const rowDataBuf = this.tableRowData$.getValue();

    this.tableRowData$.next([...rowDataBuf, currentData]);
  }

  public removeRow(i: number): void {
    const rowDataBuf = this.tableRowData$.getValue();

    this.tableRowData$.next([...rowDataBuf.filter((e, index) => index !== i)]);
  }
}
