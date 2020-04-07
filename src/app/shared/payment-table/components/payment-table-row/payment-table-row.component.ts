import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PRICE_BY_DAY_CONTROL_NAME } from '../../../../utils/constants/payment-table-consts';
import { IPaymentTableColumn, IPaymentTableRow } from '../../../../utils/interfaces/payment-table-interfaces';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MonthDaysEnum, MonthLangEnum } from '../../../../utils/enums/month.enum';

@Component({
  selector: 'app-payment-table-row',
  templateUrl: './payment-table-row.component.html',
  styleUrls: ['./payment-table-row.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaymentTableRowComponent implements OnInit {
  @Input() public rowData: IPaymentTableRow;
  @Input() public columnData: IPaymentTableColumn[];

  @Output() removeTableRow: EventEmitter<void> = new EventEmitter<void>();

  public priceByDayControlName: string = PRICE_BY_DAY_CONTROL_NAME;
  public rowControlNames: string[] = [];
  public rowFormGroup: FormGroup;

  constructor(private fb: FormBuilder) { }

  public ngOnInit(): void {
    this.initForm();
  }

  public getFullPrice(priceByDay: number): number {
    const selectedMonth = Object.keys(this.rowFormGroup.value).filter((key) => this.rowFormGroup.value[key]);
    let sumOfDays = 0;

    selectedMonth.forEach((month: string) => {
      sumOfDays += MonthDaysEnum[month];
    });

    return sumOfDays * priceByDay;
  }

  public emitRemoveRow(): void {
    this.removeTableRow.emit();
  }

  private initForm(): void {
    this.rowFormGroup = this.fb.group({});
    Object.keys(MonthLangEnum).forEach((elem) => {
      this.rowFormGroup.addControl(elem, new FormControl(false, []));
      this.rowControlNames = [...this.rowControlNames, elem];
    });
  }
}
