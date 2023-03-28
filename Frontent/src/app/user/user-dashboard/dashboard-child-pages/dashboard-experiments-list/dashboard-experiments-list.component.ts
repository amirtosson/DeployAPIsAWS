import { Component, OnInit, Inject } from '@angular/core';
import { ELNApis } from "../../../../server-communications/eln-apis";
import { SharedApis } from "../../../../server-communications/shared-apis";

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
    let inUseEln = this.ELNs.find(i => i.elnData['eln_doi'] === eln_doi);
    sessionStorage.setItem('in-use-eln', JSON.stringify(inUseEln?.elnData))
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
        console.log("here1")
        const iterator = res.values();
        for (const value of iterator) { 
          var x = new ELNItem();
          x.ELNMap(value)
          if (value['eln_data'].length > 0) {
            x.elnData['eln_data'] = JSON.parse(value['eln_data'])
          }
          this.ELNs.push(x);
        }
      }
    )
    .then
    (()=>
      {
        console.log("here2")
        var request = indexedDB.open("daphne", 1)
        request.onsuccess = event =>{
          var db = request.result;
          this.ELNs.forEach
          (
            eln =>
            {
              SharedApis.GetELNsDatasetsLinksByELNId(eln.elnData['eln_id'])
              .then
              ( 
                resu=>
                {
                  for (let index = 0; index < resu.length; index++) {
                    var r = db.transaction("datasets", "readwrite").objectStore("datasets").get(resu[index].dataset_id!)
                    r.onsuccess = (e:any) => {
                      eln.elnData['linked_datasets_names'].push(e.target.result.details.dataset_name)
                    }
                  
                    eln.elnData['linked_datasets_ids'].push(resu[index].dataset_id!)
                    
                    
            
                  }
                }
              )
            }
          )
        }
      }
    )
  }
}

