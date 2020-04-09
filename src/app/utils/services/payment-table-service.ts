import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IPaymentTableColumn, IPaymentTableRow } from '../interfaces/payment-table-interfaces';
import { TABLE_COLUMN_DATA, TABLE_ROW_DATA } from '../mock/payment-table-mock-data';

@Injectable({
  providedIn: 'root'
})
export class PaymentTableService {
  public tableColumnData$ = new BehaviorSubject(TABLE_COLUMN_DATA);
  public tableRowData$ = new BehaviorSubject(TABLE_ROW_DATA);

  public addRow(currentData: IPaymentTableRow): void {
    const rowDataBuf = this.tableRowData$.getValue();

    this.tableRowData$.next([...rowDataBuf, currentData]);
  }

  public removeRow(i: number): void {
    const rowDataBuf = this.tableRowData$.getValue();

    this.tableRowData$.next([...rowDataBuf.filter((e, index) => index !== i)]);
  }

  public changeRow(i: number, data): void {
    const rowDataBuf = this.tableRowData$.getValue();
    const searchElem = rowDataBuf.find((elem, index) => index === i);
    const newData = {
      ...searchElem,
      ...data
    };

    rowDataBuf.splice(i, 1, newData);
    this.tableRowData$.next([...rowDataBuf]);
  }

  public getTableRowData(): Observable<IPaymentTableRow[]> {
    return this.tableRowData$;
  }

  public getTableColumnData(): Observable<IPaymentTableColumn[]> {
    return this.tableColumnData$;
  }
}
