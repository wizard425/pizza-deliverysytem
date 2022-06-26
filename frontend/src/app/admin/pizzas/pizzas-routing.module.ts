import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PizzaDetailComponent } from './pizza-detail/pizza-detail.component';
import { PizzasComponent } from './pizzas.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: PizzasComponent
      },
      {
        path: 'new',
        component: PizzaDetailComponent
      },
      {
        path: 'detail/:pizzaId',
        component: PizzaDetailComponent
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PizzasRoutingModule { }
