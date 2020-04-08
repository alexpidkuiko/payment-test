import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { PRICE_BY_DAY_CONTROL_NAME } from '../../../../utils/constants/payment-table-consts';
import { IPaymentTableColumn, IPaymentTableRow } from '../../../../utils/interfaces/payment-table-interfaces';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MonthLangEnum } from '../../../../utils/enums/month.enum';
import { PaymentTableService } from '../../../../utils/services/payment-table-service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-payment-table-row',
  templateUrl: './payment-table-row.component.html',
  styleUrls: ['./payment-table-row.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaymentTableRowComponent implements OnInit, OnDestroy {
  @Input() public rowData: IPaymentTableRow;
  @Input() public columnData: IPaymentTableColumn[];
  @Input() public rowIndex: number;

  @Output() public removeTableRow: EventEmitter<void> = new EventEmitter<void>();

  public priceByDayControlName: string = PRICE_BY_DAY_CONTROL_NAME;
  public rowControlNames: string[] = [];
  public rowFormGroup: FormGroup;

  private destroy$: Subject<void> = new Subject<void>();

  constructor(private fb: FormBuilder,
              private cdr: ChangeDetectorRef,
              private paymentTableService: PaymentTableService) { }

  public ngOnInit(): void {
    this.initForm();

    this.rowFormGroup.valueChanges
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe((data) => this.paymentTableService.changeRow(this.rowIndex, data));
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public emitRemoveRow(): void {
    this.removeTableRow.emit();
  }

  private initForm(): void {
    this.rowFormGroup = this.fb.group({});
    Object.keys(MonthLangEnum).forEach((elem) => {
      this.rowFormGroup.addControl(elem, new FormControl(this.rowData[elem], []));
      this.rowControlNames = [...this.rowControlNames, elem];
    });
  }
}
