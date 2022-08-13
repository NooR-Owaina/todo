import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  login(loginData:any){
    if(this.isValid(loginData)){
      let form:any = document.getElementById('LoginForm');
      form.setAttribute('style', 'display:none;');
      let todo = document.getElementById('todo');
      todo?.removeAttribute('style', );
    }
  }
  isValid(loginData: any) {
    let data:any = localStorage.getItem('users')
    if( data!=(null||undefined) && loginData!=(null||undefined) && 
     data.email == loginData.email && data.password == loginData.password){
      return true;
    }
    return false;
  }
}

