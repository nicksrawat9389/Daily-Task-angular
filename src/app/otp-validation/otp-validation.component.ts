import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otp-validation',
  templateUrl: './otp-validation.component.html',
  styleUrls: ['./otp-validation.component.css']
})
export class OtpValidationComponent {
  otpFormControl = new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$'), Validators.minLength(6), Validators.maxLength(6)]);
  
  constructor(private router:Router) {
    
    
  }
  verifyOtp() {
    if (this.otpFormControl.valid) {
      // Perform OTP verification logic here
      console.log('OTP:', this.otpFormControl.value);
    }
  }
  sendOTPHandler(){
    if(this.otpFormControl.valid&&this.otpFormControl.value==="000000"){
      this.router.navigateByUrl("/set-password")
    }
  }

}
