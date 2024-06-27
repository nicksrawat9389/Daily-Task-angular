import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit{
  resetForm!: FormGroup
  /**
   *
   */
  constructor(private router:Router) {}
  formSubmitted:Boolean=false;
  ngOnInit(): void {
    this.resetForm=new FormGroup({
      email:new FormControl('',[Validators.required, Validators.email])
    })
  }

  verifyEmailHandler(){
    //validation DB Call
    this.resetForm.get('email')?.value;
    if(this.resetForm.valid && this.formSubmitted){

      this.router.navigateByUrl('/otp-validation');
    }else
    {
      this.formSubmitted=true;
    }
  }

  
}
