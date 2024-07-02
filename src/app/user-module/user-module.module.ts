import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from "@angular/material/card";
import { UserModuleRoutingModule } from './user-module-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SuperAdminComponent } from './super-admin/super-admin.component';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import { SuperAdminLoginComponent } from './super-admin-login/super-admin-login.component'

@NgModule({
  declarations: [
    SuperAdminComponent,
    SuperAdminLoginComponent
  ],
  imports: [
    CommonModule,
    UserModuleRoutingModule,
    ReactiveFormsModule,
    MatCardModule,
    MatSlideToggleModule

    
    
  ]
})
export class UserModuleModule { }
