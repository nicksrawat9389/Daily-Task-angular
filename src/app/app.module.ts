import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginformComponent } from './loginform/loginform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UnauthenticateUseComponent } from './unauthenticate-use/unauthenticate-use.component';
import { RegistrationformComponent } from './registrationform/registrationform.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { OtpValidationComponent } from './otp-validation/otp-validation.component';
import { NgOtpInputModule } from 'ng-otp-input';
import { SetPasswordComponent } from './set-password/set-password.component';
import { UserModuleModule } from './user-module/user-module.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginformComponent,
    DashboardComponent,
    UnauthenticateUseComponent,
    RegistrationformComponent,
    ResetPasswordComponent,
    OtpValidationComponent,
    SetPasswordComponent,

  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModuleModule,
    ReactiveFormsModule,
    NgOtpInputModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
