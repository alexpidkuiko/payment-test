export interface IPaymentTableRow {
  paymentName: string;
  priceByDay: number;
  January?: boolean;
  February?: boolean;
  March?: boolean;
  April?: boolean;
  May?: boolean;
  June?: boolean;
  July?: boolean;
  August?: boolean;
  September?: boolean;
  October?: boolean;
  November?: boolean;
  December?: boolean;
}

export interface IPaymentTableColumn {
  title: string;
  controlName: string;
}
