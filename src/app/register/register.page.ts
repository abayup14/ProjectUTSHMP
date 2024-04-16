import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { Router } from '@angular/router';

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

  constructor(private userservice: UserserviceService, private router: Router) { }

  ngOnInit() {
  }

  register() {
    this.userservice.addUser(
      this.new_username,
      this.new_namaLengkap,
      this.new_url,
      this.new_pass
    )

    this.new_username = ""
    this.new_namaLengkap = ""
    this.new_url = ""
    this.new_pass = ""

    this.router.navigate(["/login"])
  }

}
