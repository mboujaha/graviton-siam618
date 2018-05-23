import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxDataGridModule } from 'devextreme-angular';

@NgModule({
  imports: [
    CommonModule,
    DxDataGridModule,
  ],
  exports: [
    CommonModule,
    DxDataGridModule
  ],
  declarations: []
})
export class TiersModule { }
