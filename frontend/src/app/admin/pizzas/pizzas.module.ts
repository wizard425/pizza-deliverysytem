import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PizzasComponent } from './pizzas.component';
import { PizzasRoutingModule } from './pizzas-routing.module';



@NgModule({
  declarations: [
    PizzasComponent
  ],
  imports: [
    CommonModule,
    PizzasRoutingModule
  ]
})
export class PizzasModule { }
