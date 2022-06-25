import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { PizzasComponent } from './pizzas/pizzas.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'pizza',
        loadChildren : () => import('./pizzas/pizzas.module').then(x => x.PizzasModule)
      },
      {
        path: 'extras',
        loadChildren : () => import('./extras/extras.module').then(x => x.ExtrasModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
