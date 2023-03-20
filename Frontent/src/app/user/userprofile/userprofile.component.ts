import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserMetadata } from "../../entities/user/user-entity";
import { SidebarService } from "../../services/sidebar-service.service";
@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  loggedUserMetadata = new UserMetadata();

  constructor(private router: Router, private sidebarService : SidebarService) { }

  ngOnInit(): void {
    this.sidebarService.setVisibility(false)
    this.loggedUserMetadata = JSON.parse(sessionStorage.getItem('userData')!)
  }
  OnGoToDashboard(){
    this.loggedUserMetadata.first_name+this.loggedUserMetadata.last_name
    this.sidebarService.setVisibility(true)
    this.router.navigateByUrl('/'+this.loggedUserMetadata.first_name+this.loggedUserMetadata.last_name+'/dashboard/home' );
  }


  OnLogOutClicked(){
    sessionStorage.clear()
    this.router.navigateByUrl('login')
  }


  OnAddNewDataset(){
    this.router.navigateByUrl('/'+this.loggedUserMetadata.first_name+this.loggedUserMetadata.last_name+'/newdata' );
  }


}
