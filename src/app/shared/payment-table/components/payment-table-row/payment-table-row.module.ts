import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentTableRowComponent } from './payment-table-row.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    PaymentTableRowComponent
  ],
  exports: [
    PaymentTableRowComponent
  ]
})
export class PaymentTableRowModule { }
