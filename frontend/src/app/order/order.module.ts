import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order.component';
import { OrderRoutingModule } from './order-routing.module';
import { PizzaMenuItemComponent } from './pizza-menu-item/pizza-menu-item.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CartComponent } from './cart/cart.component';
import { PizzaOrderDetailComponent } from './pizza-order-detail/pizza-order-detail.component';
import { DrinkMenuItemComponent } from './drink-menu-item/drink-menu-item.component';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    OrderComponent,
    PizzaMenuItemComponent,
    CartComponent,
    PizzaOrderDetailComponent,
    DrinkMenuItemComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    MatButtonModule,
    MatIconModule,
    NgScrollbarModule,
    MatDialogModule
  ]
})
export class OrderModule { }
