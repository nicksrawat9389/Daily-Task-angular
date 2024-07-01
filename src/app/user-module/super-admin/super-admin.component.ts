import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-super-admin',
  templateUrl: './super-admin.component.html',
  styleUrls: ['./super-admin.component.css']
})
export class SuperAdminComponent implements OnInit {
    users: Array<{id:number,name:string,email:string,contact:string,designation:string,isActive:boolean}> = [];
    userForm! : FormGroup;
    editForm:boolean = false;
    formSubmitted:boolean = false;
    count:number = 0;


  //toggle button
  checked:boolean = false;
  disabled:boolean = false;



    ngOnInit(): void {
      this.userForm = new FormGroup({
        id:new FormControl('',[Validators.required]),
        name:new FormControl('',[Validators.required]),
        email:new FormControl('',[Validators.required,Validators.email]),
        contact:new FormControl('',[Validators.required,Validators.pattern('^[0-9]{10}$')]),
        designation:new FormControl('',[Validators.required]),
        isActive:new FormControl(false)
      })

      this.users = JSON.parse(localStorage.getItem('array')!);
    }

    userSubmitHandler(){
      if(this.userForm.valid || this.formSubmitted){
        if(localStorage.getItem('array')!=null){
          this.users = JSON.parse(localStorage.getItem('array')!);
          // this.userForm.value.id = this.count++;
          this.users.push(this.userForm.value);
          localStorage.setItem('array',JSON.stringify(this.users));
          this.userForm.reset();
        }else{
          this.users.push(this.userForm.value);
          localStorage.setItem('array',JSON.stringify(this.users));
          this.userForm.reset();
        }
      }
    }

    editSubmitHandler(){
      this.users = JSON.parse(localStorage.getItem('array')!);
      this.users.forEach(user => {
        if(user.id === this.userForm.value.id){
          user.name = this.userForm.value.name;
          user.contact = this.userForm.value.contact;
          user.designation = this.userForm.value.designation;
          user.email = this.userForm.value.email;
        }
      });
      localStorage.setItem('array',JSON.stringify(this.users));
      this.editForm = false;
      this.userForm.reset();
    
    }

    editHandler(user:any){
      this.editForm = true;
      this.userForm.patchValue({id:user.id,name:user.name,email:user.email,contact:user.contact,designation:user.designation});
    }

    deleteHandler(user:any){
      this.users = JSON.parse(localStorage.getItem('array')!);
      this.users.forEach(u=>{
        if(u.id === user.id){
          this.users.splice(this.users.indexOf(u),1);
          localStorage.setItem('array',JSON.stringify(this.users));
        }
        else{
          localStorage.setItem('array',JSON.stringify(this.users));
        }
      })
    }

    onChange(event:any,userId:any){
      console.log(event);
      this.users = JSON.parse(localStorage.getItem('array')!);
      this.users.forEach(u=>{
        if(u.id === userId){
          u.isActive = !u.isActive;
          localStorage.setItem('array',JSON.stringify(this.users));
        }
      })
    }


}
