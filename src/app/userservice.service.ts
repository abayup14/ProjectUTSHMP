import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  users = [
    {
      username: "steven",
      fullname: "Steven Christopher",
      url_foto: "",
      password: "s"
    },
    {
      username: "abayu",
      fullname: "Andreas Baayu",
      url_foto: "",
      password: "a"
    },
  ]
  constructor() { }
}
