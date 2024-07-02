import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SellerLoginComponent } from './seller-login/seller-login.component';
import { SellerDashboardComponent } from './seller-dashboard/seller-dashboard.component';

const routes: Routes = [
  {
    path:'seller-login',
    component:SellerLoginComponent
  },
  {
    path:'seller-dashboard',
    component:SellerDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerModuleRoutingModule { }
