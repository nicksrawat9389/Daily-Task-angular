import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-seller-login',
  templateUrl: './seller-login.component.html',
  styleUrls: ['./seller-login.component.css']
})
export class SellerLoginComponent {


  formsubmitted : boolean = false;
  wrongId:boolean=false;
  loginForm!: FormGroup;
  users: Array<{id:number,name:string,email:string,password:string,contact:string,designation:string,isActive:boolean}> = [];
  constructor(private authService:AuthService,private router:Router){

  }
    ngOnInit(): void {
      this.loginForm = new FormGroup({
        username:new FormControl('',[Validators.required,Validators.email]),
        password:new FormControl('',[Validators.required])
      })
      // if (localStorage.getItem('array')==null) localStorage.setItem('array',JSON.stringify(this.users));
      this.users = JSON.parse(localStorage.getItem('array')!);
    }
    onSubmit(){
      if(this.loginForm.valid){
        const username = this.loginForm.get("username")?.value;
        const password = this.loginForm.get("password")?.value;
        
        this.users.forEach(user=>{
          if(username===user.email && password===user.password){
            if(user.isActive){
              this.router.navigateByUrl('/seller/seller-dashboard');
            }
            else{
              alert("Your account is not active");
            }
          }
        })
      }
    }
}
