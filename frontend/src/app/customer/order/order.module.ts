import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order.component';
import { OrderRoutingModule } from './order-routing.module';
import { PizzaMenuItemComponent } from './pizza-menu-item/pizza-menu-item.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { PizzaOrderDetailComponent } from './pizza-order-detail/pizza-order-detail.component';
import { DrinkMenuItemComponent } from './drink-menu-item/drink-menu-item.component';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';



@NgModule({
  declarations: [
    OrderComponent,
    PizzaMenuItemComponent,
    PizzaOrderDetailComponent,
    DrinkMenuItemComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    MatButtonModule,
    MatIconModule,
    NgScrollbarModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    LeafletModule,
    MatSnackBarModule
  ],
  entryComponents: [
    PizzaOrderDetailComponent
  ]
})
export class OrderModule { }
