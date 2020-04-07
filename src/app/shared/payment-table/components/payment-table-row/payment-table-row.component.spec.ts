import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentTableRowComponent } from './payment-table-row.component';

describe('PaymentTableRowComponent', () => {
  let component: PaymentTableRowComponent;
  let fixture: ComponentFixture<PaymentTableRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentTableRowComponent ]
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
});
