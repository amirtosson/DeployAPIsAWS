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

  OnSignUpClicked(){
    this.router.navigateByUrl('signup')
  }

  DeactivateAll(){
    var all_eles = document.getElementsByClassName("header-item") as HTMLCollectionOf <HTMLElement>;
    for (let index = 0; index < all_eles.length; index++) {
      all_eles[index].classList.remove("active-section") ;
      
    }
  }

  Scroll($event: { target: any; }){
    this.DeactivateAll();
    var id = $event.target.attributes.id.value
    console.log(id)
    
    var main_ele = document.getElementById(id) as HTMLDivElement; 
    main_ele.classList.add("active-section");

    var el = document.getElementById(id+"-div") as HTMLDivElement; 
    
    //window.scroll(0,el.offsetTop);
    //.scrollIntoView({behavior: 'smooth'});
    window.scrollTo({
      top: el.offsetTop - 100,
      behavior: 'smooth',
    });
  
  }

}
