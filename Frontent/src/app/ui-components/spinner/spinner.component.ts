import { Component, OnInit } from '@angular/core';
import { SpinnerServiceService } from "../../services/spinner-service.service";


@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {
  isShown = false;
  constructor(private spinnerService:SpinnerServiceService) { }

  ngOnInit(): void {
    this.spinnerService.showSpinner.subscribe(show => {
      this.UpdateSpinnerDisplay(show)
    })
  }

  UpdateSpinnerDisplay(show:boolean){
    this.isShown = show
    var f = document.getElementById("dis-div") as HTMLDivElement;
    f.style.visibility=  show?"visible":"hidden"
  }

}
