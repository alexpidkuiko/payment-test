import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentTableRowComponent } from './payment-table-row.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PriceByMonthPipe } from '../../../../utils/pipes/price-by-month.pipe';
import { MonthLangEnum } from '../../../../utils/enums/month.enum';

describe('PaymentTableRowComponent', () => {
  let component: PaymentTableRowComponent;
  let fixture: ComponentFixture<PaymentTableRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule
      ],
      providers: [
        FormBuilder
      ],
      declarations: [
        PaymentTableRowComponent,
        PriceByMonthPipe
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentTableRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit removeTableRow after emitRemoveRow call', () => {
    let voidData;
    component.removeTableRow.subscribe((data) => voidData = data);

    component.emitRemoveRow();
    expect(voidData).toBeUndefined();
  });

  it('rowFormGroup should be Defined after initForm call. initForm called in ngOnInit)', () => {
    expect(component.rowFormGroup).toBeDefined();
  });

  it('Object.keys(rowFormGroup.controls) should toBe Object.keys(MonthLangEnum))', () => {
    expect(Object.keys(component.rowFormGroup.controls).length).toBe(Object.keys(MonthLangEnum).length);
  });
});
