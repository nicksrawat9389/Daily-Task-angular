import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginformComponent } from './loginform/loginform.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { UnauthenticateUseComponent } from './unauthenticate-use/unauthenticate-use.component';
import { RegistrationformComponent } from './registrationform/registrationform.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { OtpValidationComponent } from './otp-validation/otp-validation.component';
import { SetPasswordComponent } from './set-password/set-password.component';

const routes: Routes = [
  {
    path:'',
    component:LoginformComponent,
  },
  {
    path:'dashboard',
    component:DashboardComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'unauthenticate',
    component:UnauthenticateUseComponent
  },
  {
    path:'registration',
    component:RegistrationformComponent
  },
  {
    path: 'resetpassword',
    component: ResetPasswordComponent
  },
  {
    path:'otp-validation',
    component:OtpValidationComponent
  },
  {
    path:'set-password',
    component:SetPasswordComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
