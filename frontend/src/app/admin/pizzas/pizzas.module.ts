import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PizzasComponent } from './pizzas.component';
import { PizzasRoutingModule } from './pizzas-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { MatTableModule } from '@angular/material/table';
import { PizzaDetailComponent } from './pizza-detail/pizza-detail.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    PizzasComponent,
    PizzaDetailComponent
  ],
  imports: [
    CommonModule,
    PizzasRoutingModule,
    TranslateModule,
    MatTableModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule
  ]
})
export class PizzasModule { }
