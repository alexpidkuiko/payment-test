import { ComponentFixture, TestBed, fakeAsync, waitForAsync } from '@angular/core/testing';

import { TableActionsBarComponent } from './table-actions-bar.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { IPaymentTableRow } from '../../../../utils/interfaces/payment-table-interfaces';
import {
  INVALID_MOCK_PAYMENT_NAME, INVALID_MOCK_PRICE_BY_DAY,
  MOCK_ROW_DATA,
  VALID_MOCK_PAYMENT_NAME,
  VALID_MOCK_PRICE_BY_DAY
} from '../../../../utils/mock/payment-table-mock-data';

describe('TableActionsBarComponent', () => {
  let component: TableActionsBarComponent;
  let fixture: ComponentFixture<TableActionsBarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [
        TableActionsBarComponent
      ],
      providers: [
        FormBuilder
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableActionsBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  function updateForm(paymentName, priceByDay) {
    component.paymentFormGroup.controls['paymentName'].setValue(paymentName);
    component.paymentFormGroup.controls['priceByDay'].setValue(priceByDay);
  }

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit addPaymentData after emitAddRow call', () => {
    let newPaymentData: IPaymentTableRow;
    component.addPaymentData.subscribe((data) => newPaymentData = data );

    component.emitAddRow();
    expect(newPaymentData).toBeDefined();
  });

  it('paymentFormGroup should be Defined after initForm call. initForm called in ngOnInit)', () => {
    expect(component.paymentFormGroup).toBeDefined();
  });

  it('form value should update from form changes', fakeAsync(() => {
    updateForm(VALID_MOCK_PAYMENT_NAME, VALID_MOCK_PRICE_BY_DAY);
    expect(component.paymentFormGroup.value).toEqual(MOCK_ROW_DATA);
  }));

  it('form status should be valid for valid data', fakeAsync(() => {
    updateForm(VALID_MOCK_PAYMENT_NAME, VALID_MOCK_PRICE_BY_DAY);
    expect(component.paymentFormGroup.valid).toBeTruthy();
  }));

  it('form status should be invalid for invalid data', fakeAsync(() => {
    updateForm(INVALID_MOCK_PAYMENT_NAME, INVALID_MOCK_PRICE_BY_DAY);
    expect(component.paymentFormGroup.invalid).toBeTruthy();
  }));
});
