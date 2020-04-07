import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IPaymentTableRow } from '../../../../utils/interfaces/payment-table-interfaces';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-table-actions-bar',
  templateUrl: './table-actions-bar.component.html',
  styleUrls: ['./table-actions-bar.component.css']
})
export class TableActionsBarComponent implements OnInit {
  @Output() addPaymentData: EventEmitter<IPaymentTableRow> = new EventEmitter<IPaymentTableRow>();

  public paymentFormGroup: FormGroup;

  constructor(private fb: FormBuilder) { }

  public ngOnInit(): void {
    this.initForm();
  }

  public emitAddRow(): void {
    this.addPaymentData.emit(this.paymentFormGroup.value);
  }

  private initForm(): void {
    this.paymentFormGroup = this.fb.group({
      paymentName: [null, [Validators.required]],
      priceByDay: [null, [Validators.required, Validators.min(0)]]
    });
  }
}
