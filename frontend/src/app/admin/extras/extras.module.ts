import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExtrasRoutingModule } from './extras-routing.module';
import { ExtrasComponent } from './extras.component';



@NgModule({
  declarations: [
    ExtrasComponent
  ],
  imports: [
    CommonModule,
    ExtrasRoutingModule
  ]
})
export class ExtrasModule { }
