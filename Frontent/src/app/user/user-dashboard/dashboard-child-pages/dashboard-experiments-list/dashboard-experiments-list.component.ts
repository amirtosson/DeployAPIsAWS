import { Component, OnInit } from '@angular/core';
import { ELNApis } from "../../../../server-communications/eln-apis";
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard-experiments-list',
  templateUrl: './dashboard-experiments-list.component.html',
  styleUrls: ['./dashboard-experiments-list.component.css']
})
export class DashboardExperimentsListComponent implements OnInit {

  innerH = ""

  constructor(private sanitizer:DomSanitizer) { }

  ngOnInit(): void {
    ELNApis.GetEln("DOITEST")
    .then(
      res=>{
        console.log(res[0])
        var e = document.getElementById("preview") as HTMLDivElement;
        var resString = JSON.parse(res[0].eln_data)


        e.innerHTML =  resString
      }
    )
  }

}
