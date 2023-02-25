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
  isExpanded = true;
  isShown = true;
  ngOnInit(): void {
    this.sidebarService.showToolbar.subscribe(show => {
      this.UpdateSidebarItems(show)
    })
   
    //this.TestSidebarItems()
  }

  UpdateSidebarItems(show:boolean){
    this.isShown = show
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

  OnItemClicked($event: { target: any; }) {
    var id = $event.target.attributes.id.value
    var u = JSON.parse(sessionStorage.getItem("userData")!);
    if (id === "profile") {
      this.router.navigateByUrl("userprofile/"+u["first_name"]+u["last_name"])
    }
    else if (id === "dataset-list") {
      this.router.navigateByUrl(u["first_name"]+u["last_name"]+"/dashboard/datasetslist")
    }
    else if (id === "home") {
      this.router.navigateByUrl(u["first_name"]+u["last_name"]+"/dashboard/home")
    }
    else if (id === "exp") {
      this.router.navigateByUrl(u["_id"]+"/exp/experimentslist")
    }
    else{
      this.router.navigateByUrl(u["first_name"]+u["last_name"]+"/newdata")
    }
    //this.router.navigateByUrl(event)
    //var t = event.target as HTMLLIElement;
    //t.classList.remove('is-active')
  }

}
