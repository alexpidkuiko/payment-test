import { IPaymentTableColumn } from '../interfaces/payment-table-interfaces';

export const TABLE_COLUMN_DATA: IPaymentTableColumn[] = [
  {title: 'Наименование платежа', controlName: 'paymentName' },
  {title: 'Стоимость', controlName: 'priceByDay'}
];

export const PRICE_BY_DAY_CONTROL_NAME = 'priceByDay';
