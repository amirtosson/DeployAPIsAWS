import { Component, OnInit, ViewChild } from '@angular/core';
import { SidebarService } from "../../services/sidebar-service.service";
import { Router } from '@angular/router';
import { DashboardHomeComponent } from "./dashboard-child-pages/dashboard-home/dashboard-home/dashboard-home.component";
import { DashboardDatasetsListComponent } from "./dashboard-child-pages/dashboard-datasets-list/dashboard-datasets-list.component";

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  constructor(private sbService:SidebarService, private router: Router) { }
  @ViewChild(DashboardHomeComponent) _dbHomeComponent?: DashboardHomeComponent;
  @ViewChild(DashboardDatasetsListComponent) _dbListComponent?: DashboardDatasetsListComponent;

  ngOnInit(): void {
    //this.sbService.setCurrentPage("dashboard")
    //this.router.navigateByUrl(this.router.url + '/home')  
  }

  NavItemClicked($event: { target: any; }){

    var id = $event.target.attributes.id
    if (id === undefined)return 
    // var elesActive = document.getElementsByClassName("active") as HTMLCollectionOf<HTMLDivElement>;
    // if (elesActive === null)return 
    // elesActive[0].classList.remove("active");
    // var elActive = document.getElementById(id.value) as HTMLDivElement;
    // elActive.classList.add("active");

    var eles = document.getElementsByClassName("is-shown") as HTMLCollectionOf<HTMLDivElement>;
    if (eles[0] === null)return 
    eles[0].classList.add("is-hidden");
    eles[0].classList.remove("is-shown");
 
    var el = document.getElementById(id.value+"-page") as HTMLDivElement;
    if (el === null)return 
    el.classList.add("is-shown");
    el.classList.remove("is-hidden");   
  }
  
}
