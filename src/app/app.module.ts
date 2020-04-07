import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PaymentTableModule } from './shared/payment-table/payment-table.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PaymentTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
