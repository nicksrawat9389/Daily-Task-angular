import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;
  private authSecretKey = "Token";

  constructor( private router:Router) 
  {
    this.isAuthenticated = !!localStorage.getItem(this.authSecretKey);
  }

  login(username:string,password:string){
    if((username=="abhayrawat9389@gmail.com" && password=="Abhayrawat@123")||((username=="abhay@gmail.com" && password=="abhay"))){
      const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpheWRlZXAgUGF0aWwiLCJpYXQiOjE1MTYyMzkwMjJ9.yt3EOXf60R62Mef2oFpbFh2ihkP5qZ4fM8bjVnF8YhA";
      localStorage.setItem(this.authSecretKey,authToken);
      this.isAuthenticated=true;
      return true;
    }else{
      return false;
    }
  }

  isAuthenticatedUser():boolean{
    return this.isAuthenticated;
  }
  logout(){
    console.log("Hello from logout")
    this.isAuthenticated=false;
    localStorage.removeItem(this.authSecretKey);

    this.router.navigateByUrl("");
  }

}
