import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
interface Country{
  name:string,
  states:string[]
}
@Component({
  selector: 'app-registrationform',
  templateUrl: './registrationform.component.html',
  styleUrls: ['./registrationform.component.css']
})


export class RegistrationformComponent implements OnInit{
  registrationForm!:FormGroup;
  formsubmitted:boolean=false;
  selectedCountry:string="";
  states: string[]=[];
  countries: Country[] = [
    { name: 'country', states: ['state'] },
    {
      name: 'India',
      states: ['Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Chhattisgarh','Goa','Gujarat','Haryana','Himachal Pradesh','Jharkhand','Karnataka','Kerala','Madhya Pradesh','Maharashtra','Manipur','Meghalaya','Mizoram','Nagaland','Odisha','Punjab','Rajasthan','Sikkim','Tamil Nadu','Telangana','Tripura','Uttarakhand','Uttar Pradesh','West Bengal']
    },
    {
      name: 'US',
      states: ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming']
    }
  ];
  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password:new FormControl('',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]),
      confirmPassword:new FormControl('',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]),
      phone: new FormControl('', [Validators.required,Validators.pattern('^[0-9]{10}$')]),
      address: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required, Validators.min(1)]),
      gender: new FormControl('', [Validators.required]),
      country:new FormControl('',Validators.required),
      state:new FormControl('',Validators.required)
    })
  }

  submitHandler(){
    if(this.registrationForm.valid  && this.formsubmitted){
      if((this.registrationForm.get('confirmPassword')?.value===this.registrationForm.get('password')?.value)){
        console.log(this.registrationForm.value);
      }else{
        alert("Password and Confirm Password Doesn't Match")
      }
    }
    else{
      this.formsubmitted=true;
    }
    
  }

  changeHandler(event:any){
    const selectedCountry = this.countries.find(a=>a.name === event.target.value);
    this.states = selectedCountry ? selectedCountry.states : [];
  }

  

}
