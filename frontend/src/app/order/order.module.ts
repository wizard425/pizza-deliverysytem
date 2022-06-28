import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order.component';
import { OrderRoutingModule } from './order-routing.module';
import { PizzaMenuItemComponent } from './pizza-menu-item/pizza-menu-item.component';



@NgModule({
  declarations: [
    OrderComponent,
    PizzaMenuItemComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule
  ]
})
export class OrderModule { }
