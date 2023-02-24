import { Component, OnInit } from '@angular/core';
import { Dataset } from "../../../../entities/dataset/dataset-entity";
import { DatasetsAPIs } from "../../../../server-communications/dataset-apis";
import { Router } from '@angular/router';
import { SidebarService } from "../../../../services/sidebar-service.service";


@Component({
  selector: 'app-dashboard-datasets-list',
  templateUrl: './dashboard-datasets-list.component.html',
  styleUrls: ['./dashboard-datasets-list.component.css']
})
export class DashboardDatasetsListComponent implements OnInit {
  datasets: Dataset[] = []
  loggedUserID:any;
  constructor(private router: Router, private sidebarService : SidebarService) { }

  ngOnInit(): void {
    this.sidebarService.setVisibility(true)
    this.loggedUserID = sessionStorage.getItem('user_id')
    this.UpdateTable(this.loggedUserID)
  }

  DownloadDataset(dataset_pid:string){
    window.open(dataset_pid);
  }

  OpenDataset(dataset_doi:string){
    let inUseDataset = this.datasets.find(i => i.dataset_doi === dataset_doi);
    sessionStorage.setItem("in_use_dataset", JSON.stringify(inUseDataset))
    const user_token = sessionStorage.getItem('user_token') as string;
    this.router.navigateByUrl(user_token + "/" + dataset_doi)
  }

  DeleteDataset(dataset_doi:string, original_file_name:string){
    if(confirm("Are you sure to delete "+original_file_name)) {
      DatasetsAPIs.DeleteDatasetByDOI(dataset_doi, original_file_name)
      .then(
        res=>{
          window.alert(original_file_name + " has been deleted.");
          this.UpdateTable(this.loggedUserID)
        }
      )
    }
  }

  UpdateTable(id:any){
    this.datasets = []
    DatasetsAPIs.GetDatasetsByUserId(id)
    .then
    (res =>{
      const iterator = res.values();
      for (const value of iterator) {  
        var x = new Dataset();
        x = value;
        this.datasets.push(x);
      }
    })
  }
}
