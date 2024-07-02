import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuperAdminComponent } from './super-admin/super-admin.component';
import { SuperAdminLoginComponent } from './super-admin-login/super-admin-login.component';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  {
    path:'super-admin',
    component:SuperAdminComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'super-login',
    component:SuperAdminLoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserModuleRoutingModule { }
