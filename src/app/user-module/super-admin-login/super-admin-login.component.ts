import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-super-admin-login',
  templateUrl: './super-admin-login.component.html',
  styleUrls: ['./super-admin-login.component.css']
})
export class SuperAdminLoginComponent implements OnInit {
   
  formsubmitted : boolean = false;
  wrongId:boolean=false;
  loginForm!: FormGroup;
  constructor(private authService:AuthService,private router:Router){

  }
    ngOnInit(): void {
      this.loginForm = new FormGroup({
        username:new FormControl('',[Validators.required,Validators.email]),
        password:new FormControl('',[Validators.required])
      })
    }
    onSubmit(){
      console.log("Hello ji")
      if(this.loginForm.valid){
        const username = this.loginForm.get("username")?.value;
      const password = this.loginForm.get("password")?.value;

          if(this.authService.login(username,password)){
            this.router.navigateByUrl("/user/super-admin");
          }
          else{
            this.formsubmitted = true;
            this.wrongId = true;
            console.log(this.wrongId);
          }
      }
    }
}