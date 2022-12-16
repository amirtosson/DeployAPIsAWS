import { Component, OnInit } from '@angular/core';
import { ProjectsAPIs } from "../../server-communication/projects-apis";
import { UserService } from "../../services/user.service";
import { ProjectItem } from "../../objects/project-object"
import { DatasetItem } from "../../objects/dataset-item";
import { DatasetsAPIs } from "../../server-communication/datasets-apis";
import { Router } from '@angular/router';
import { DatasetService } from "../../services/dataset.service";
import { GeneralService } from "../../services/general.service";

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  public projects: ProjectItem[] = [];
  public datasets: DatasetItem[] = [];
  currentUserName = "";
  constructor(
    public userService:UserService,
    public flyingBtnService:GeneralService,
    public datasetService:DatasetService,
    private router: Router ) 
  {
    var user_id = this.userService.GetLoggedUser().userData['user_id'];
    this.currentUserName = this.userService.GetLoggedUser().userData['first_name'] + " " +this.userService.GetLoggedUser().userData['last_name']
    ProjectsAPIs.GetProjectsByUserId(user_id)
    .then(
      res=>
      {
        const iterator = res.values();
        for (const value of iterator) 
        {   
          var pro = new ProjectItem()
          pro = value
          this.projects.push(pro)
        }
      }
    )
    DatasetsAPIs.GetDatasetsByUserId(user_id)
    .then(
      res=>
      {
        const iterator = res.values();
        for (const value of iterator) 
        {   
          var ds = new DatasetItem()
          ds = value
          this.datasets.push(ds)
        }
      }
    )

  }
 
  ngOnInit(): void {
    this.flyingBtnService.setHeaderBarItems("add-new-data");
  }

  NavItemClicked($event: { target: any; }){

    var id = $event.target.attributes.id
    if (id === undefined)return 
    var elesActive = document.getElementsByClassName("active") as HTMLCollectionOf<HTMLDivElement>;
    if (elesActive === null)return 
    elesActive[0].classList.remove("active");
    var elActive = document.getElementById(id.value) as HTMLDivElement;
    elActive.classList.add("active");
  }

  UseDataset(dataset_id:number, dataset_doi:string, dataset_name:string, dataset_struct:string){
    this.datasetService.SetDatasetInUse(dataset_id, dataset_doi, dataset_name, dataset_struct)
    this.router.navigateByUrl('/dataset/'+ dataset_doi);
  }
  DeleteDataset(dataset_id:number){
    console.log(dataset_id)
  }

}
