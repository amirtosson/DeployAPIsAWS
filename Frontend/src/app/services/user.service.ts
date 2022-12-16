import { Injectable } from '@angular/core';
import { User } from "../objects/user-object";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() { }

  SetLoggedUser(user:User){
    sessionStorage.setItem("userData", JSON.stringify(user));
  }

  GetLoggedUser(){
   return JSON.parse(sessionStorage.getItem("userData")!);
  }
}
