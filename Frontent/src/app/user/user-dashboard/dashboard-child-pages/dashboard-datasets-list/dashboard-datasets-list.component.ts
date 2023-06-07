import { Component, OnInit } from '@angular/core';
import { Dataset } from "../../../../entities/dataset/dataset-entity";
import { DatasetsAPIs } from "../../../../server-communications/dataset-apis";
import { Router } from '@angular/router';
import { SidebarService } from "../../../../services/sidebar-service.service";
import { LocalStorageServiceService } from "../../../../services/local-storage-service.service";


@Component({
  selector: 'app-dashboard-datasets-list',
  templateUrl: './dashboard-datasets-list.component.html',
  styleUrls: ['./dashboard-datasets-list.component.css']
})
export class DashboardDatasetsListComponent implements OnInit {
  datasets: Dataset[] = []
  loggedUserID: any;
  searchText: string = '';
  viewStyle = "grid"
  methodFilter = "all";
  typeFilter = "all";
  ownerFilter = "-1";
  l: any;

  constructor(
    private router: Router,
    private sidebarService: SidebarService,
    private localStorageService: LocalStorageServiceService) { }

  ngOnInit(): void {
    this.sidebarService.setVisibility(true)
    this.loggedUserID = sessionStorage.getItem('user_id')
    this.UpdateTable()
  }

  DownloadDataset(dataset_pid: string) {
    window.open(dataset_pid);
  }

  OpenDataset(dataset_doi: string) {
    let inUseDataset = this.datasets.find(i => i.dataset_doi === dataset_doi);
    sessionStorage.setItem("in_use_dataset", JSON.stringify(inUseDataset))
    const user_token = sessionStorage.getItem('user_token') as string;
    this.router.navigateByUrl(user_token + "/" + dataset_doi)
  }

  DeleteDataset(dataset_doi: string, original_file_name: string) {
    if (confirm("Are you sure to delete " + original_file_name)) {
      DatasetsAPIs.DeleteDatasetByDOI(dataset_doi, original_file_name)
        .then(
          res => {
            window.alert(original_file_name + " has been deleted.");
            this.UpdateTable()
          }
        )
    }
  }

  UpdateTable() {
    this.datasets = []
    this.localStorageService.GetAllItems()
      .then
      (res=>
        {
          if (res) {
            for (const key in res) {
              var x = new Dataset();
              x = res[key].details;
              this.datasets.push(x);
            }
          }
        }

      )
  }

  ViewChanged($event: { target: any; }) {
    this.viewStyle = $event.target.id
    var eles = document.getElementsByClassName("view-active")!
    for (let index = 0; index < eles.length; index++) {
      eles[index].classList.remove("view-active")
    }
    var ele = document.getElementById($event.target.id)!
    ele.classList.add("view-active")
  }

  TypeChanged(typeValue) {
    this.typeFilter = typeValue.value
  }

  OwnershipChanged(e) {
    e.checked ? this.ownerFilter = this.loggedUserID : this.ownerFilter = "-1";
  }



  MethodFilterChanged($event: { target: any; }) {
    var eles = document.getElementsByClassName("filter-active")!
    for (let index = 0; index < eles.length; index++) {
      eles[index].classList.remove("filter-active")
    }
    document.getElementById($event.target.id)!.classList.add("filter-active")
    this.methodFilter = $event.target.id
  }
}
