import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PRICE_BY_DAY_CONTROL_NAME } from '../../../../utils/constants/payment-table-consts';
import { IPaymentTableColumn, IPaymentTableRow } from '../../../../utils/interfaces/payment-table-interfaces';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MonthLangEnum } from '../../../../utils/enums/month.enum';

@Component({
  selector: 'app-payment-table-row',
  templateUrl: './payment-table-row.component.html',
  styleUrls: ['./payment-table-row.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaymentTableRowComponent implements OnInit {
  @Input() public rowData: IPaymentTableRow;
  @Input() public columnData: IPaymentTableColumn[];

  @Output() public removeTableRow: EventEmitter<void> = new EventEmitter<void>();

  public priceByDayControlName: string = PRICE_BY_DAY_CONTROL_NAME;
  public rowControlNames: string[] = [];
  public rowFormGroup: FormGroup;

  constructor(private fb: FormBuilder) { }

  public ngOnInit(): void {
    this.initForm();
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
