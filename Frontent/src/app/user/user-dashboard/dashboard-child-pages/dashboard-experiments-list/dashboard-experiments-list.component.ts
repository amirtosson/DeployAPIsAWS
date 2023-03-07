import { Component, OnInit, Inject } from '@angular/core';
import { ELNApis } from "../../../../server-communications/eln-apis";
import { ELNItem } from "../../../../entities/elns/eln-item";
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard-experiments-list',
  templateUrl: './dashboard-experiments-list.component.html',
  styleUrls: ['./dashboard-experiments-list.component.css']
})
export class DashboardExperimentsListComponent implements OnInit {

  searchText: string = '';
  ELNs: ELNItem[] = []
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.UpdateELNList()
    this.searchText = ''
    
  }



  OpenExpELN(eln_doi:string){
    let inUseEln = this.ELNs.find(i => i.eln_doi === eln_doi);
    var e = document.getElementById(eln_doi) as HTMLDivElement;
    sessionStorage.setItem('in-use-eln', JSON.stringify(inUseEln))
    this.router.navigateByUrl(sessionStorage.getItem("user_id")!+"/eln/" + eln_doi)
  }

  CreatNewExpELN(){
    this.ToggleFlyingForm(true)
   
  }

  ToggleFlyingForm(disable = false){
    var f = document.getElementById("dis-div") as HTMLDivElement;
    f.style.visibility=  disable?"visible":"hidden"
    f = document.getElementById("flying-form") as HTMLDivElement;
    disable?f.classList.add("flying-form-opened"):f.classList.remove("flying-form-opened")
  }

  CancelCreating(){
    this.ToggleFlyingForm(false)
  }

  ConfirmCreating(){
    var elnName = document.getElementById("eln-new-name") as HTMLInputElement;
    var f = document.getElementById("editing-directly") as HTMLInputElement;
    if (!elnName.validity.valid) {
      return
    }
    ELNApis.CreateNewELN(sessionStorage.getItem("user_id")!, elnName.value)
    .then(
      res=>{
        this.UpdateELNList()
        this.ToggleFlyingForm(false)
        if (f.checked) {
            this.OpenExpELN(res.eln_doi)
        }
      }
    )

  }

  UpdateELNList(){
    this.ELNs = []
    ELNApis.GetElnsList(sessionStorage.getItem("user_id")!)
    .then(
      res=>{
        const iterator = res.values();
        
        for (const value of iterator) {  
          console.log()
          if (value['eln_data'].length > 0) {
            value['eln_data'] = JSON.parse(value['eln_data'])
          }

          var x = new ELNItem();
          x = value;
          this.ELNs.push(x);
        }
        // var e = document.getElementById("preview") as HTMLDivElement;
        // var resString = JSON.parse(res[0].eln_data)


        // e.innerHTML =  resString
      }
    )
  }
}

