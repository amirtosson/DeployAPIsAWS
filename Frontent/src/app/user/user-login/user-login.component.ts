import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserAuthServerFunctions} from "../../server-communications/user-auth";
import { User } from "../../entities/user/user-entity";
import { SidebarService } from "../../services/sidebar-service.service";

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  user= new User();
  constructor(private router: Router, private sidebarService : SidebarService) { }

  ngOnInit(): void {
    this.sidebarService.setVisibility(false)
  }

  OnLoginClicked(){
    var userName = document.getElementById("username") as HTMLInputElement;
    //this.router.navigateByUrl('/userprofile/'+ userName.value);
    var userPassword = document.getElementById("userpwd") as HTMLInputElement;
    UserAuthServerFunctions.LoginUser(userName.value,userPassword.value)
    .then
    (
      res => 
      {
        this.user = res
        sessionStorage.setItem("userData", JSON.stringify(this.user.user));
        sessionStorage.setItem('isLogged', "true");
        sessionStorage.setItem('user_id', res.user_id);
        sessionStorage.setItem('user_token', res.user_token)
        sessionStorage.setItem('first_name', res.first_name)
        sessionStorage.setItem('last_name', res.last_name)

        this.router.navigateByUrl('/userprofile/'+ this.user.user.first_name+this.user.user.last_name);       
        
      }
    )
  
  }
}
