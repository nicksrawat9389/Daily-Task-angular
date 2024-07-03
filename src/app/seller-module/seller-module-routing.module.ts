import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SellerLoginComponent } from './seller-login/seller-login.component';
import { SellerDashboardComponent } from './seller-dashboard/seller-dashboard.component';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';

const routes: Routes = [
  {
    path:'seller-login',
    component:SellerLoginComponent
  },
  {
    path:'seller-dashboard',
    component:SellerDashboardComponent
  },
  {
    path:'seller-add-product',
    component:SellerAddProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerModuleRoutingModule { }
