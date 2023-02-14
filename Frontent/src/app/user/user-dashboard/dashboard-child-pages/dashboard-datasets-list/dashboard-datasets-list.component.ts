import { Component, OnInit } from '@angular/core';
import { Dataset } from "../../../../entities/dataset/dataset-entity";
import { DatasetsAPIs } from "../../../../server-communications/dataset-apis";
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-datasets-list',
  templateUrl: './dashboard-datasets-list.component.html',
  styleUrls: ['./dashboard-datasets-list.component.css']
})
export class DashboardDatasetsListComponent implements OnInit {
  datasets: Dataset[] = []
  constructor(private router: Router) { }

  ngOnInit(): void {
    const id = sessionStorage.getItem('user_id')
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

  DownloadDataset(dataset_pid:string){
    window.open(dataset_pid);
  }

  OpenDataset(dataset_doi:string){
    let inUseDataset = this.datasets.find(i => i.dataset_doi === dataset_doi);
    sessionStorage.setItem("in_use_dataset", JSON.stringify(inUseDataset))
    const user_token = sessionStorage.getItem('user_token') as string;
    this.router.navigateByUrl(user_token + "/" + dataset_doi)
  }
}
