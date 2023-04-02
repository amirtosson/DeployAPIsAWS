import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarService } from "../../services/sidebar-service.service";
import { UserAuthServerFunctions } from "../../server-communications/user-auth";
import { User } from "../../entities/user/user-entity";
import { read } from 'fs';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  newUser = new User(); 
  loginName = '';
  nameAvailable = false;
  errorMSG: string[] = [];
  constructor(private router:Router, private sB : SidebarService) { }

  ngOnInit(): void {
    this.sB.setVisibility(false)
  }

  OnSignUpClicked(){
    const detailsAreReady = this.InputValidation()

    if(!detailsAreReady || !this.nameAvailable) return
    UserAuthServerFunctions.SignUp(this.newUser)
    .then(res=>{
      if(res.user_id>0){
        this.router.navigateByUrl('login')
      }
    })
    //if(this.InputValidation()) console.log(this.newUser)
  }

  OnCheckAvailability(){
    UserAuthServerFunctions.CheckLoginNameAvailiability(this.loginName)
    .then(res=>{
      this.nameAvailable = res.available
    })
  }

  OnInputChanged($event: { target: any; }){
    console.log($event.target.id)

  }

  InputValidation(){
    this.errorMSG = []
    var ele = document.getElementsByTagName('input')!
    this.OnCheckAvailability()
    
    var ready = true

    if (!ele[0].validity.valid) {
      this.errorMSG.push('Login name is not valid.') ;
      ready = false;
    }
    if (!ele[1].validity.valid) {
      this.errorMSG.push('Password is not valid.') ;
      ready = false;
    }

    if (ele[1].value != ele[2].value ) {
      this.errorMSG.push('Passwords are not identical.') ;
      ready = false;
    }
    if (!this.nameAvailable) {
      this.errorMSG.push('Login name is in used.') ;
      ready = false;
    }
    for (let ind = 2; ind < 8; ind++) {
      if(ele[ind].value.length < 1) 
      {
        this.errorMSG.push('Some required details are empty.') ;
        ready = false
        break;
      } 

    }


    if(!ready) return ready;
    for (let index = 0; index < ele.length; index++) {
      this.newUser[ele[index].id] = ele[index].value
    }
    this.newUser.loginname = this.loginName
    return ready
  }



}
