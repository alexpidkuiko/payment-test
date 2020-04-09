import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges
} from '@angular/core';
import { IPaymentTableColumn, IPaymentTableRow } from '../../utils/interfaces/payment-table-interfaces';
import { MonthDaysEnum, MonthLangEnum } from '../../utils/enums/month.enum';

@Component({
  selector: 'app-payment-table',
  templateUrl: './payment-table.component.html',
  styleUrls: ['./payment-table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaymentTableComponent implements OnChanges {
  @Input() public rowData: IPaymentTableRow[];
  @Input() public columnData: IPaymentTableColumn[];

  @Output() public removeTableRow: EventEmitter<number> = new EventEmitter<number>();
  @Output() public addPaymentData: EventEmitter<IPaymentTableRow> = new EventEmitter<IPaymentTableRow>();

  public monthNames: string[] = Object.values(MonthLangEnum);
  public spentFunds: number;

  public ngOnChanges(changes: SimpleChanges): void {
    let globSum = 0;
    this.rowData.forEach((elem) => {
      const selectedMonth = Object.keys(MonthLangEnum).filter((key) => elem[key]);
      let sumOfDays = 0;

      selectedMonth.forEach((month: string) => {
        sumOfDays += MonthDaysEnum[month];
      });

      globSum += sumOfDays * elem.priceByDay;
    });

    this.spentFunds = globSum;
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
