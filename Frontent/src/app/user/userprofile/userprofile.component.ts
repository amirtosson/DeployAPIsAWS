import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserMetadata } from "../../entities/user/user-entity";
@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  loggedUserMetadata = new UserMetadata();

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.loggedUserMetadata = JSON.parse(sessionStorage.getItem('userData')!)
  }
  OnGoToDashboard(){
    this.loggedUserMetadata.first_name+this.loggedUserMetadata.last_name
    this.router.navigateByUrl('/'+this.loggedUserMetadata.first_name+this.loggedUserMetadata.last_name+'/dashboard' );
  }

  OnAddNewDataset(){
    this.router.navigateByUrl('/'+this.loggedUserMetadata.first_name+this.loggedUserMetadata.last_name+'/newdata' );
  }


}
