import { Component, OnInit } from '@angular/core';
import { SidebarService } from "../../services/sidebar-service.service";
import { Dataset } from "../../entities/dataset/dataset-entity";
import { DatasetsAPIs } from "../../server-communications/dataset-apis";
//import { GeneralAPIs } from "../../server-communication/general-apis";
//import { MethodItem, DataStructureItem } from "../../objects/general-items";
////import { ProjectItem } from "../../objects/project-object"
//import { UserService } from "../../services/user.service";
////import { ProjectsAPIs } from "../../server-communication/projects-apis";
import { HttpClient } from '@angular/common/http';
//import { GeneralService } from "../../services/general.service";
//import { DatasetsAPIs } from "../../server-communication/datasets-apis";
import { Router } from '@angular/router';
import { log } from 'console';
import { Collection } from '@angular-devkit/schematics';


@Component({
  selector: 'app-add-new-dataset',
  templateUrl: './add-new-dataset.component.html',
  styleUrls: ['./add-new-dataset.component.css']
})
export class AddNewDatasetComponent implements OnInit {
  file:any;
  public dataset = new Dataset();
  //public methods: MethodItem[] = [];
  public projects: string[] = [];

  file_reconstructed_name = '';
  constructor
  (
    private sbService:SidebarService,
    //public userService:UserService,
    //public flyingBtnService:GeneralService,
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.sbService.setVisibility(false)  
    // GeneralAPIs.GetDataStructuresList()
    // .then(
    //   res=>{
    //     const iterator = res.values();
    //     for (const value of iterator) 
    //     {   
    //       var struc = new DataStructureItem()
    //       struc = value
    //       this.dataStructures.push(struc)
    //     }
    //   }
    // )

    // GeneralAPIs.GetMethodsList()
    // .then(
    //   res=>{
    //     const iterator = res.values();
    //     for (const value of iterator) 
    //     {   
    //       var method = new MethodItem()
    //       method = value
    //       this.methods.push(method)
    //     }
    //   }
    // )

    // var user_id = this.userService.GetLoggedUser().userData['user_id'];
    // ProjectsAPIs.GetProjectsByUserId(user_id)
    // .then(
    //   res=>
    //   {
    //     const iterator = res.values();
    //     for (const value of iterator) 
    //     {   
    //       var pro = new ProjectItem()
    //       pro = value
    //       this.projects.push(pro)
    //     }
    //   }
    // )publication_details_section
    // this.flyingBtnService.setHeaderBarItems("back-to-dashboard");
  }

  SelectFile($event: { target: any; }) {
    if ($event.target.files.length > 0) {
      const file = $event.target.files[0];
      this.file = file;
    }
  }

  startDetails(){
    var el2 = document.getElementById("data_structure") as HTMLDivElement;
    el2.classList.remove("disabled");
    el2.scrollIntoView({behavior: 'smooth'});
  }
  allCardsToDefault(){
    var eles = document.getElementsByClassName("card") as HTMLCollectionOf<HTMLElement>;
    for (var i = 0; i < eles.length; i++) {
      eles[i].classList.remove("card_pressed");
    }
    let sec_eles = document.getElementsByTagName("section");
    for (var i = 0; i < sec_eles.length; i++) {
      sec_eles[i].classList.add("disabled");
    }
    var el2 = document.getElementById("datatype") as HTMLDivElement;
    el2.classList.remove("disabled");
    el2.scrollIntoView({behavior: 'smooth'});
    this.dataset = new Dataset();
  }

  TypeClicked($event: { target: any; }){
    var el = document.getElementById($event.target.id) as HTMLDivElement;
    el.classList.add("card_pressed");
    this.startDetails()
    this.dataset.dataset_type = $event.target.id
  }

  StructureClicked($event: { target: any; }){
    var el = document.getElementById($event.target.id) as HTMLDivElement;
    el.classList.add("card_pressed");
    this.startDetails()
    this.dataset.dataset_structure_name = $event.target.id
    var el2 = document.getElementById("dataset_details_section") as HTMLDivElement;
    el2.classList.remove("disabled");
    el2.scrollIntoView({behavior: 'smooth'});

  }

  NextClicked(next_ele_id:string, current_ele_id:string){
    var inp = document.getElementById(current_ele_id) as HTMLDivElement;
    var inps = inp.getElementsByTagName('input') as HTMLCollectionOf<HTMLInputElement>;
    
    for (let index = 0; index < inps.length; index++) 
    {
      if (!inps[index].validity.valid) return;
    }
    if (current_ele_id == "publication_details_section"){
      var textarea = document.getElementById("publication-abstract") as HTMLTextAreaElement;
      if (!textarea.validity.valid) return;
    }
    
    var el2 = document.getElementById(next_ele_id) as HTMLDivElement;
    el2.classList.remove("disabled");
    el2.scrollIntoView({behavior: 'smooth'})
  }

  onSubmit(){
    this.dataset.owner_id = sessionStorage.getItem("user_id")!
    // dataset details section
    var dataName = document.getElementById("data-name") as HTMLInputElement;
    this.dataset.dataset_name = dataName.value
    var project =  document.getElementById("projects") as HTMLSelectElement;
    this.dataset.project_id =  project.value
    var visibility = document.getElementById("visibility") as HTMLInputElement;
    this.dataset.dataset_visibility_id = visibility.value;

    // experiment details section
    var sampleName = document.getElementById("sample-name") as HTMLInputElement;
    this.dataset.dataset_sample_name = sampleName.value;
    var method =  document.getElementById("methods") as HTMLSelectElement;
    this.dataset.method_id = method.value
    var sys =  document.getElementById("systems") as HTMLSelectElement;
    this.dataset.dataset_exp_system_id=  sys.value
    var fac =  document.getElementById("facilities") as HTMLSelectElement;
    this.dataset.dataset_facility_id =  fac.value

    // publication details section
    var pubTitle = document.getElementById("publication-title") as HTMLInputElement;
    this.dataset.publication_title = pubTitle.value;
    var pubDOI = document.getElementById("publication-doi") as HTMLInputElement;
    this.dataset.publication_doi = pubDOI.value;
    var pubAbs = document.getElementById("publication-abstract") as HTMLTextAreaElement;
    this.dataset.abstract = pubAbs.value;

    const formData = new FormData();
    formData.append('file', this.file);

    this.http.post<any>('http://18.197.145.132:3002/uploadfile',formData, {reportProgress: false})
    .subscribe(res => {
      
      if (res.pid && res.doi && res.file_name) {
        this.dataset.dataset_pid =  res.pid;
        this.dataset.dataset_doi = res.doi;
        this.dataset.dataset_filename = res.file_name; 
        DatasetsAPIs.AddFileDetailsToDatabases(this.dataset)
        .then(resu => {
          var input =  document.getElementById("upload-file") as HTMLInputElement;
          input.value = ''
          var inps = document.getElementsByTagName('input') as HTMLCollectionOf<HTMLInputElement>;
    
          for (let index = 0; index < inps.length; index++) 
          {
            inps[index].value = '';
          }
          window.alert("Your file has been uploaded uploaded with the name "+ this.file.name);
          this.allCardsToDefault()
        })

      }



    })
  


    //  .subscribe(res => {
    //       DatasetsAPIs.SingleFileCheck(res)
    //       .then(
    //         res=>{
    //           console.log(res)
    //         }
    //       )
    //       .then(
    //         ()=>{
    //           var input =  document.getElementById("upload-file") as HTMLInputElement;
    //           input.value = ''
    //           window.alert("Your file has been uploaded uploaded with the name "+ this.file_reconstructed_name);
    //           this.allCardsToDefault()
    //         }
    //       )

        
    //  });

  }


  GoToDashboard(){
    var u = JSON.parse(sessionStorage.getItem("userData")!) 
    this.router.navigateByUrl(u["first_name"]+u["last_name"]+"/dashboard/home")
  }

  GoToProfile(){
    var u = JSON.parse(sessionStorage.getItem("userData")!) 
    this.router.navigateByUrl("userprofile/"+u["first_name"]+u["last_name"])
  }
}
