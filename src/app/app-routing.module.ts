import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OrdersPZComponent} from './components/orders-pz/orders-pz.component';
import {OrdersDetailsPZComponent} from './components/orders-details-pz/orders-details-pz.component';


const routes: Routes = [
  {
    path: '',
    component: OrdersPZComponent
  },
  {
    path: 'orders/detail/:id',
    component: OrdersDetailsPZComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
