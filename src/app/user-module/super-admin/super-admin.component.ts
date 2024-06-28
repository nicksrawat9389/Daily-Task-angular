import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-super-admin',
  templateUrl: './super-admin.component.html',
  styleUrls: ['./super-admin.component.css']
})
export class SuperAdminComponent implements OnInit {
    users: Array<{name:string,email:string,contact:string,designation:string}> = [];
    userForm! : FormGroup;
    editForm:boolean = false;
    formSubmitted:boolean = false;
    ngOnInit(): void {
      this.userForm = new FormGroup({
        name:new FormControl('',[Validators.required]),
        email:new FormControl('',[Validators.required,Validators.email]),
        contact:new FormControl('',[Validators.required,Validators.pattern('^[0-9]{10}$')]),
        designation:new FormControl('',[Validators.required])
      })
    }

    userSubmitHandler(){
      if(this.userForm.valid || this.formSubmitted){

        this.users.push(this.userForm.value);
        console.log(this.users);
        this.userForm.reset();
      }
    }

    editSubmitHandler(){
      this.users.forEach(user => {
        if(user.email === this.userForm.value.email){
          user.name = this.userForm.value.name;
          user.contact = this.userForm.value.contact;
          user.designation = this.userForm.value.designation;
          user.email = this.userForm.value.email;
        }
      });
      this.editForm = false;
      this.userForm.reset();
    
    }

    editHandler(user:any){
      this.editForm = true;
      this.userForm.patchValue({name:user.name,email:user.email,contact:user.contact,designation:user.designation});
    }


}
