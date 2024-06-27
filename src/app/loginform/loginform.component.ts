import { Component, OnInit } from '@angular/core';
// import { OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit  {
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
            this.router.navigateByUrl("/dashboard");
          }
          else{
            this.formsubmitted = true;
            this.wrongId = true;
            console.log(this.wrongId);
          }
      }
        

    
    }
}
