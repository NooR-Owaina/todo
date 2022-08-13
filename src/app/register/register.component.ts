import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { validation } from './validation';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  register(registerData:any) {
    if( this.isValid(registerData)){
      localStorage.setItem('users', JSON.stringify(registerData));
    }
  }
  isValid(registerData:any){
    if (registerData!=(null||undefined) && validation.isName(registerData.firstName) && validation.isName(registerData.lastName) && validation.isEmail(registerData.email) &&
     validation.isAge(registerData.age) && validation.isPassword(registerData.password) && registerData.confirmPassword === registerData.password) {
      return true; 
    }
    return false;
  }
}
