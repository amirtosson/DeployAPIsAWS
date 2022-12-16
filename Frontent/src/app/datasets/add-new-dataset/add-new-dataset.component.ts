import { Component, OnInit } from '@angular/core';
//import { GeneralAPIs } from "../../server-communication/general-apis";
//import { MethodItem, DataStructureItem } from "../../objects/general-items";
////import { ProjectItem } from "../../objects/project-object"
//import { UserService } from "../../services/user.service";
////import { ProjectsAPIs } from "../../server-communication/projects-apis";
//import { HttpClient } from '@angular/common/http';
//import { GeneralService } from "../../services/general.service";
//import { DatasetsAPIs } from "../../server-communication/datasets-apis";



@Component({
  selector: 'app-add-new-dataset',
  templateUrl: './add-new-dataset.component.html',
  styleUrls: ['./add-new-dataset.component.css']
})
export class AddNewDatasetComponent implements OnInit {
  file:any;
  //public dataStructures: DataStructureItem[] = [];
  //public methods: MethodItem[] = [];
  public projects: string[] = [];

  file_reconstructed_name = '';
  constructor
  (
    //public userService:UserService,
    //public flyingBtnService:GeneralService,
    //private http: HttpClient,
  ) { }

  ngOnInit(): void {
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
    // )
    // this.flyingBtnService.setHeaderBarItems("back-to-dashboard");
  }
  UpdateFileName(name_part:string){
    this.file_reconstructed_name = this.file_reconstructed_name + name_part+"_"  
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
  }
  oneDImageClicked(){
    //console.log(this.dataStructures)
    this.allCardsToDefault()
    var el = document.getElementById("1d") as HTMLDivElement;
    el.classList.add("card_pressed");
    this.startDetails()
    this.file_reconstructed_name ="1d_"
  }
  twoDImageClicked(){
    this.allCardsToDefault()
    var el = document.getElementById("2d") as HTMLDivElement;
    el.classList.add("card_pressed");
    this.startDetails()
    this.file_reconstructed_name ="2d_"
  }
  threeDImageClicked(){
    this.allCardsToDefault()
    var el = document.getElementById("3d") as HTMLDivElement;
    el.classList.add("card_pressed");
    this.startDetails()
    this.file_reconstructed_name ="3d_"
  }

  DataStructureDetailsIsReady(){
    var el2 = document.getElementById("details_section") as HTMLDivElement;
    el2.classList.remove("disabled");
    el2.scrollIntoView({behavior: 'smooth'});

  }


  DataDetailsAreReady(){
    var el2 = document.getElementById("upload-section") as HTMLDivElement;
    el2.classList.remove("disabled");
    el2.scrollIntoView({behavior: 'smooth'})
  }

  onSubmit(){

    let id:string
    id = sessionStorage.getItem("userID") as string 
    this.UpdateFileName(id)
    var structure =  document.getElementById("structure") as HTMLSelectElement;
    this.UpdateFileName(structure.value)
    var method =  document.getElementById("methods") as HTMLSelectElement;
    this.UpdateFileName(method.value)
    var project =  document.getElementById("projects") as HTMLSelectElement;
    this.UpdateFileName(project.value)
    var dataName = document.getElementById("data-name") as HTMLInputElement;
    this.UpdateFileName(dataName.value)
    var visibility = document.getElementById("visibility") as HTMLInputElement;
    this.UpdateFileName(visibility.value)
    const formData = new FormData();
    formData.append('file', this.file, this.file_reconstructed_name);
    //  this.http.post<any>('http://141.99.126.53:3050/uploadfile',formData, {reportProgress: true})
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
}
