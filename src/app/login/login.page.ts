import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  login_username = ""
  login_password = ""

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login(){

  }

  toReg() {
    this.router.navigate(["/register"])
  }

}
