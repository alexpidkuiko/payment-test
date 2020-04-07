import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentTableRowComponent } from './payment-table-row.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PriceByMonthPipe } from '../../../../utils/pipes/price-by-month.pipe';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    PaymentTableRowComponent,
    PriceByMonthPipe
  ],
  exports: [
    PaymentTableRowComponent
  ]
})
export class PaymentTableRowModule { }
