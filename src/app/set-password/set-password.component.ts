import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.component.html',
  styleUrls: ['./set-password.component.css']
})
export class SetPasswordComponent {
  formSubmitted:boolean=false;
  /**
   *
   */
  constructor(private router:Router) {}

  setPasswordForm = new FormGroup({
    password: new FormControl('',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]),
    confirmPassword: new FormControl('',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])
  })

  setPasswordHandler(){
    if(this.setPasswordForm.valid) {
        if(this.setPasswordForm.get('password')?.value === this.setPasswordForm.get('confirmPassword')?.value){
          alert("Password Reset Sucessfully")
          this.router.navigateByUrl('/');
        }
        else{
          alert("Password and confirm password Doesn't match");
        }
    }
    else{
      this.formSubmitted=true;
    }
  }
}
