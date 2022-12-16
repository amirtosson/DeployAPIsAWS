import { Component, OnInit } from '@angular/core';
import { UserService } from "../../services/user.service";
import { Router } from '@angular/router';
import { User } from "../../objects/user-object";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user = new User();

  constructor
  (
    public userService:UserService,
    private router: Router
  ) 
  { }

  ngOnInit(): void {
    this.user = this.userService.GetLoggedUser()
  }

  GoToDashboard()
  {
    this.router.navigateByUrl('/userdashboard/'+ this.user.userData['first_name']+ this.user.userData['last_name']);
  }
  AddNewDataset(){
    this.router.navigateByUrl('/newdataset')
  }

}
