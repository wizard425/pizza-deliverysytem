import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import(`./customer/customer.module`).then(m => m.CustomerModule)
  },
  {
    path: 'order',
    loadChildren: () => import(`./order/order.module`).then(m => m.OrderModule)
  },
  {
    path: 'admin',
    loadChildren: () => import(`./admin/admin.module`).then(m => m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
