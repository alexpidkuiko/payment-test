import { TestBed } from '@angular/core/testing';
import { PaymentTableService } from './payment-table-service';
import { MOCK_ROW_DATA } from '../mock/payment-table-mock-data';

describe('PaymentTableService', () => {

  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PaymentTableService = TestBed.get(PaymentTableService);
    expect(service).toBeTruthy();
  });

  it('should be equal to tableRowData$', () => {
    const service: PaymentTableService = TestBed.get(PaymentTableService);
    expect(service.getTableRowData()).toEqual(service.tableRowData$);
  });

  it('should be equal to tableColumnData$', () => {
    const service: PaymentTableService = TestBed.get(PaymentTableService);
    expect(service.getTableColumnData()).toEqual(service.tableColumnData$);
  });

  it('data of tableRowData$ should increased by one', () => {
    const service: PaymentTableService = TestBed.get(PaymentTableService);
    service.addRow(MOCK_ROW_DATA);
    expect(service.tableRowData$.value.length).toEqual(3);
  });

  it('data of tableRowData$ should decreased by one', () => {
    const service: PaymentTableService = TestBed.get(PaymentTableService);
    service.removeRow(0);
    expect(service.tableRowData$.value.length).toEqual(1);
  });

  it('length of tableRowData$ should by Equal length after changeRow call', () => {
    const service: PaymentTableService = TestBed.get(PaymentTableService);
    service.changeRow(1, MOCK_ROW_DATA);
    expect(service.tableRowData$.value.length).toEqual(2);
  });
});
