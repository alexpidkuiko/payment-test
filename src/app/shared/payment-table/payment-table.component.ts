import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IPaymentTableColumn, IPaymentTableRow } from '../../utils/interfaces/payment-table-interfaces';
import { MonthLangEnum } from '../../utils/enums/month.enum';

@Component({
  selector: 'app-payment-table',
  templateUrl: './payment-table.component.html',
  styleUrls: ['./payment-table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaymentTableComponent implements OnInit {
  @Input() public rowData: IPaymentTableRow[];
  @Input() public columnData: IPaymentTableColumn[];

  @Output() public removeTableRow: EventEmitter<number> = new EventEmitter<number>();
  @Output() public addPaymentData: EventEmitter<IPaymentTableRow> = new EventEmitter<IPaymentTableRow>();

  public monthNames: string[] = Object.values(MonthLangEnum);

  constructor() { }

  public ngOnInit(): void {
  }

  public emitRemoveRow(index: number): void {
    this.removeTableRow.emit(index);
  }

  public emitAddRow(data: IPaymentTableRow): void {
    this.addPaymentData.emit(data);
  }

  public trackByFn(index: number): number {
    return index;
  }

}
