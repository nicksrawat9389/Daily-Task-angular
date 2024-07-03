import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellerModuleRoutingModule } from './seller-module-routing.module';
import { SellerLoginComponent } from './seller-login/seller-login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SellerDashboardComponent } from './seller-dashboard/seller-dashboard.component';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';
// import { SellerAddProductModalComponent } from './seller-add-product-modal/seller-add-product-modal.component';


@NgModule({
  declarations: [
    SellerLoginComponent,
    SellerDashboardComponent,
    SellerAddProductComponent
    
  ],
  imports: [
    CommonModule,
    SellerModuleRoutingModule,
    ReactiveFormsModule,
    
  ]
})
export class SellerModuleModule { }
