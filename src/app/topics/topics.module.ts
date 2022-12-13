import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValuesComponent } from './values/values.component';



@NgModule({
  declarations: [
    ValuesComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ValuesComponent
  ]
})
export class TopicsModule { }
