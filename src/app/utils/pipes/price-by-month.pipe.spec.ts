import { PriceByMonthPipe } from './price-by-month.pipe';
import { MOCK_MONTH_CONTROL_DATA } from '../mock/payment-table-mock-data';

describe('PriceByMonthPipe', () => {
  it('create an instance', () => {
    const pipe = new PriceByMonthPipe();
    expect(pipe).toBeTruthy();
  });

  it('pipe.transform should return 60 when we passing arguments priceByDay 1 and MOCK_MONTH_CONTROL_DATA', () => {
    const pipe = new PriceByMonthPipe();
    expect(pipe.transform(1, MOCK_MONTH_CONTROL_DATA)).toBe(60);
  });
});
