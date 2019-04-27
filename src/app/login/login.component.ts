import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  @Output() valueChange = new EventEmitter();

  counter = 0;

  constructor(private router: Router) { }

  // Login(formData){
  //   const email = formData.value.username;
  //   const pass = formData.value.password;
  //   if(email === "saikannake10@gmail.com" && pass === "1234"){
  //       this.router.navigate['home'];
  //     console.log(email);
  //     console.log(pass);

  //   }
  //   else {
  //     console.log("Plese Enter valid Credential");
  //     this.router.navigate['home'];
  //   }

//  }


valueChanged(){
  this.counter = this.counter + 1;
  this.valueChange.emit(this.counter);
}



}
