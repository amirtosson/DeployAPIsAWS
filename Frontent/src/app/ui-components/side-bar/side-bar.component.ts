import { Component,OnInit } from '@angular/core';
import { SidebarItem } from "./side-bar-item";
import { SidebarService } from "../../services/sidebar-service.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})



export class SideBarComponent implements OnInit {


  constructor(private sidebarService : SidebarService, private router: Router) { }
  public sidebarItems: SidebarItem[] = [];
  isExpanded = false
  ngOnInit(): void {
    this.sidebarService.currentPage.subscribe(currentpage => {
      //this.UpdateSidebarItems(currentpage)
    })
   
    //this.TestSidebarItems()
  }

  UpdateSidebarItems(pagename:string){
    this.sidebarItems = []
    if (pagename=="landing") {
      this.isExpanded = true
      var b = new SidebarItem;
    b.Name = "SignIn"
    b.RouterLink ="login"
    b.ButtonClass = "fa fa-sign-in"
    b.ToolTip = "Sign In"
    this.sidebarItems.push(b)
    } else if(pagename=="newdata"){
      var b = new SidebarItem;
      b.Name = "GoToDashboard"
      b.ButtonClass = "fa fa-dashboard"
      b.ToolTip = "Go To Dashboard"
      this.sidebarItems.push(b)
    } else if(pagename=="login"){
    var b = new SidebarItem;
    b.Name = "GoToDashboard"
    b.ButtonClass = "fa fa-dashboard"
    b.ToolTip = "Go To Dashboard"
    this.sidebarItems.push(b)
  }else if(pagename=="dashboard"){
    var b = new SidebarItem;
    b.Name = "Home"
    b.RouterLink = this.router.url
    b.ButtonClass = "fa fa-home"
    b.ToolTip = "Home"
    this.sidebarItems.push(b)
    var b = new SidebarItem;
    b.Name = "Datasets"
    b.RouterLink = this.router.url +'/datasetslist'
    b.ButtonClass = "fa fa-database"
    b.ToolTip = "Your datasets"
    this.sidebarItems.push(b)  
  }
  }

  TestSidebarItems(){
    var b = new SidebarItem;
    b.Name = "History"
    b.ButtonClass = "fa fa-history"
    b.ToolTip = "Show History"
    this.sidebarItems.push(b)
    var b = new SidebarItem;
    b.Name = "Accounts"
    b.ButtonClass = "fa fa-address-book-o"
    b.ToolTip = "Show Accounts"
    this.sidebarItems.push(b)
    var b = new SidebarItem;
    b.Name = "Proposals"
    b.ButtonClass = "fa fa-file-text-o"
    b.ToolTip = "Show Proposals"
    this.sidebarItems.push(b)
  }

  OnExpandClicked(){
    this.isExpanded = this.isExpanded? false:true;
  }

  ItemClicked(){
    this.router.navigateByUrl
  }

  OnItemClicked(event:any) {
    console.log( event);
    this.router.navigateByUrl(event)
    //var t = event.target as HTMLLIElement;
    //t.classList.remove('is-active')
  }

}
