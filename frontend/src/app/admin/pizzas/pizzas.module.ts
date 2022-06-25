import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PizzasComponent } from './pizzas.component';
import { PizzasRoutingModule } from './pizzas-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [
    PizzasComponent
  ],
  imports: [
    CommonModule,
    PizzasRoutingModule,
    TranslateModule,
    MatTableModule
  ]
})
export class PizzasModule { }
