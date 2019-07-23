import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string;
  password:string;
  loginPopUp:string="";

  users=[{"username":"sang","password":"sang"},
  {"username":"admin","password":"admin"},
  {"username":"john","password":"john"}]

  login(){
    //console.log("login()",this.username,this.password)
    for(let user of this.users){
      if(this.username==user.username && this.password==user.password){
        this.loginPopUp+="user is valid"
        console.log("user is valid");
      }
    }
    if(this.loginPopUp==""){
      this.loginPopUp+="user is invalid"
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
