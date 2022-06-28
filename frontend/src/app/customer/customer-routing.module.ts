import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer.component';

const routes: Routes = [
  {
    path: '',
    component: CustomerComponent,
    children: [
      {
        path: 'cart',
        loadChildren: () => import('./cart/cart.module').then(x => x.CartModule)
      },
      {
        path: 'home',
        loadChildren: () => import('./order/order.module').then(x => x.OrderModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
