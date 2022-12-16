import { Component, OnInit } from '@angular/core';
import { GeneralService } from "../../services/general.service";

@Component({
  selector: 'app-flying-btn',
  templateUrl: './flying-btn.component.html',
  styleUrls: ['./flying-btn.component.css']
})
export class FlyingBtnComponent implements OnInit {
  iconClass =  "fa fa-plus";
  routerLint = "/newdataset";
  isVisible = true
  constructor(private flyingBtnService: GeneralService) { }

  ngOnInit(): void {
    this.flyingBtnService.flyingBtnType.subscribe(
      btnType =>{
        if (btnType == "add-new-data") {
          this.iconClass =  "fa fa-plus";
          this.routerLint = "/newdataset";
          this.isVisible = true;
      }else if (btnType == "back-to-dashboard") 
      {
        this.iconClass =  "fa fa-tachometer";
        const u = JSON.parse(sessionStorage.getItem("userData")!)
        this.routerLint = "/userdashboard/"+u.userData["first_name"]+u.userData["last_name"];
        this.isVisible = true;
      } else{
        this.isVisible = false
      } 
      }
    )
  }

  UpdateBtnType(){

  }

}
