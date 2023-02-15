import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormDataComponent } from './form-data/form-data.component';



@NgModule({
  declarations: [
    FormDataComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FormDataComponent
  ]
})
export class FetchModule { }
