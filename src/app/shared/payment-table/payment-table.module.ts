import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentTableComponent } from './payment-table.component';
import { PaymentTableRowModule } from './components/payment-table-row/payment-table-row.module';
import { TableActionsBarModule } from './components/table-actions-bar/table-actions-bar.module';

@NgModule({
  imports: [
    CommonModule,
    PaymentTableRowModule,
    TableActionsBarModule
  ],
  declarations: [
    PaymentTableComponent
  ],
  exports: [
    PaymentTableComponent
  ]
})
export class PaymentTableModule { }
