import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  new_username = ""
  new_namaLengkap = ""
  new_url = ""
  new_pass = ""

  constructor() { }

  ngOnInit() {
  }

  register() {

  }

}
