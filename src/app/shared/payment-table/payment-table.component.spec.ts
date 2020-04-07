import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentTableComponent } from './payment-table.component';
import { TableActionsBarModule } from './components/table-actions-bar/table-actions-bar.module';
import { PaymentTableRowModule } from './components/payment-table-row/payment-table-row.module';
import { IPaymentTableRow } from '../../utils/interfaces/payment-table-interfaces';
import { MOCK_ROW_DATA } from '../../utils/mock/payment-table-mock-data';

describe('PaymentTableComponent', () => {
  let component: PaymentTableComponent;
  let fixture: ComponentFixture<PaymentTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TableActionsBarModule, PaymentTableRowModule],
      declarations: [ PaymentTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit removeTableRow after emitRemoveRow call', () => {
    let removedIndex: number;
    component.removeTableRow.subscribe((index) => removedIndex = index );

    component.emitRemoveRow(0);
    expect(removedIndex).toBeDefined();
  });

  it('should emit addPaymentData after emitAddRow call', () => {
    let newPaymentData: IPaymentTableRow;
    component.addPaymentData.subscribe((data) => newPaymentData = data );

    component.emitAddRow(MOCK_ROW_DATA);
    expect(newPaymentData).toBeDefined();
  });

  it('trackByFn should return the index that we pass into it', () => {
    const mockIndex = 0;

    expect(component.trackByFn(mockIndex)).toBe(mockIndex);
  });
});
