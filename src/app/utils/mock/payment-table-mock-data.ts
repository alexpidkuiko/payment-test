import { IPaymentTableColumn, IPaymentTableRow } from '../interfaces/payment-table-interfaces';

export const TABLE_COLUMN_DATA: IPaymentTableColumn[] = [
  {title: 'Наименование платежа', controlName: 'paymentName' },
  {title: 'Стоимость', controlName: 'priceByDay'}
];

export const TABLE_ROW_DATA: IPaymentTableRow[] = [
  {paymentName: 'Интернет', priceByDay: 10},
  {paymentName: 'Подписка на музыку', priceByDay: 15},
];

export const MOCK_ROW_DATA: IPaymentTableRow = {paymentName: 'not empty line', priceByDay: 10};

export const VALID_MOCK_PAYMENT_NAME = 'not empty line';

export const INVALID_MOCK_PAYMENT_NAME = '';

export const VALID_MOCK_PRICE_BY_DAY = 10;

export const INVALID_MOCK_PRICE_BY_DAY = -1;
