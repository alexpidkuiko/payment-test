import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableActionsBarComponent } from './table-actions-bar.component';
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
    TableActionsBarComponent
  ],
  exports: [
    TableActionsBarComponent
  ]
})
export class TableActionsBarModule { }
