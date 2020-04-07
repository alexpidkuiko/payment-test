import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { PaymentTableModule } from './shared/payment-table/payment-table.module';
import { PaymentTableService } from './utils/services/payment-table-service';
import { MOCK_ROW_DATA } from './utils/mock/payment-table-mock-data';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let paymentTableService: PaymentTableService;
  let spyOfRemoveTableRowMethod: jasmine.Spy;
  let spyOfAddPaymentDataMethod: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        PaymentTableModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    paymentTableService = fixture.debugElement.injector.get(PaymentTableService);
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should call addRow of paymentTableService', () => {
    spyOfAddPaymentDataMethod = spyOn(paymentTableService, 'addRow');
    component.addPaymentData(MOCK_ROW_DATA);
    expect(spyOfAddPaymentDataMethod.calls.any()).toBeTruthy();
  });

  it('should call removeRow of paymentTableService', () => {
    spyOfRemoveTableRowMethod = spyOn(paymentTableService, 'removeRow');
    component.removeTableRow(0);
    expect(spyOfRemoveTableRowMethod.calls.any()).toBeTruthy();
  });
});
