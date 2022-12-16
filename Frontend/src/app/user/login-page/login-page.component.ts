import { Component, OnInit } from '@angular/core';
import { UserServerFunctions } from "../../server-communication/user-austhentications";
import { Router } from '@angular/router';
import { User } from "../../objects/user-object";
import { UserService } from "../../services/user.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loggedUser = new User();

  constructor
  (
    private router: Router,
    public userService:UserService
  ) 
  { 

  }

  ngOnInit(): void {
  }

  onSignIn(){
    var userName = document.getElementById("username-input") as HTMLInputElement;
    var userPassword = document.getElementById("userpwd-input") as HTMLInputElement;
    UserServerFunctions.LoginUser(userName.value,userPassword.value)
    .then
    (
      res => 
      {
        if (res != -1) {
          this.loggedUser.UserMap(res.user, res.user_token, res.working_group, res.role_name)
          this.userService.SetLoggedUser(this.loggedUser);
          console.log(this.loggedUser)
          sessionStorage.setItem('isLogged', "true");
          sessionStorage.setItem('userID', res.user_id);
          sessionStorage.setItem('user_token', res.user_token)
          this.router.navigateByUrl('/userprofile/'+this.loggedUser.userData['first_name']+this.loggedUser.userData['last_name']);
        } 
        else 
        {
          console.log("Not found")
        }
        
      }
    )
  }

}
