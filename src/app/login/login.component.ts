import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim="Welcome to SBL Bank"

  acNumber="Account Number Please"

  acno=""

  psw=""

  users:any = {
    1000: { acno: 1000, username: "Aahil", password: "userone", balance: 5000 },
    1001: { acno: 1001, username: "Abhinav", password: "usertwo", balance: 6000 },
    1002: { acno: 1002, username: "Laisha", password: "userthree", balance: 7000 },
    1003: { acno: 1003, username: "Riddhieka", password: "userfour", balance: 8000}
  }

  constructor() { }

  ngOnInit(): void {
  }

  accNumber(event:any){
//console.log(event.target.value)
this.acno = event.target.value
  }
  pswChange(event:any){
    //console.log(event.target.value)
    this.psw = event.target.value
      }

login(){

var acno = this.acno;
var psw = this.psw;

let accDetails = this.users

if(acno in accDetails){
  if(psw == accDetails[acno]["password"]){
    alert("Login successful")
  }
  else{
    alert("Invalid password")
  }
}
else{
  alert("Invalid Account Number")
}

}

}
