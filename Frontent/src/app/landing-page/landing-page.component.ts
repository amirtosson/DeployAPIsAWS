import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarService } from "../services/sidebar-service.service";
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  title = 'DAPHNE';
  constructor(private router:Router, private sbService:SidebarService) { }

  ngOnInit(): void {
    sessionStorage.clear()
    this.sbService.setVisibility(false)  
  }

  OnLoginClicked(){
    this.router.navigateByUrl('login')
  }

}
