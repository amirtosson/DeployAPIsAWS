import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthServerFunctions } from "../../server-communications/user-auth";
import { DatasetsAPIs } from "../../server-communications/dataset-apis";
import { User } from "../../entities/user/user-entity";
import { SidebarService } from "../../services/sidebar-service.service";
import { resolve } from 'dns';
declare var db:any;
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  user= new User();
  constructor(private router: Router, private sidebarService : SidebarService) { }

  ngOnInit(): void {
    this.sidebarService.setVisibility(false)
  }

  async defdb(){
    var request = indexedDB.open("daphne", 1)
    var db;
    request.onsuccess = function () {
      db = request.result;
    }
    request.onupgradeneeded = function () {
      db = request.result;
    }
    return db
  }

  getAll(){
    return new Promise(async(resolve, reject) =>{
      this.defdb().then(db=>async function () {
        const request = await db.transaction("datasets", "readwrite").objectStore("datasets").get("VTJGc2RHVmtYMS96VzZ6NmE1NGR6YllVR0Zid2xTZjMraEdrL2NadTJOOD0")
        request.onsuccess = await function(r){
          resolve("sucess")
        }
      }
 
      

      )

    }
   
    )
  }

 OnLoginClicked(){
    var userName = document.getElementById("username") as HTMLInputElement;
    //this.router.navigateByUrl('/userprofile/'+ userName.value);
    var userPassword = document.getElementById("userpwd") as HTMLInputElement;
    UserAuthServerFunctions.LoginUser(userName.value,userPassword.value)
    .then
    (
      res => 
      {
        this.user = res
        sessionStorage.setItem("userData", JSON.stringify(this.user.user));
        sessionStorage.setItem('isLogged', "true");
        sessionStorage.setItem('user_id', res.user_id);
        sessionStorage.setItem('user_token', res.user_token)
        sessionStorage.setItem('first_name', res.first_name)
        sessionStorage.setItem('last_name', res.last_name)

        
      }
    )
    .then(
      ()=>
      {
        var request = indexedDB.open("daphne", 1)

        request.onupgradeneeded = function () {
          var db = request.result;
          const store = db.createObjectStore("datasets", {keyPath:"dataset_id"})
          //store.createIndex("owner_id", ["owner"], {unique:false})

        }


        request.onsuccess = function () {
          // var db = request.result;
          // var transaction = db.transaction("datasets", "readwrite")
          // const store = transaction.objectStore("datasets")
          // store.put({owner_id: 6, name:"test2"})
         DatasetsAPIs.GetDatasetsByUserId(sessionStorage.getItem('user_id'))
         .then(res =>
           {
            var db = request.result;
            var transaction = db.transaction("datasets", "readwrite")
             const iterator = res.values();
             for (const value of iterator) {  
                 //store.put({owner_id: value.owner_id ,dataset_id: value.dataset_id })
                 //store.put({id: 1, name:"test"})
                 const store = transaction.objectStore("datasets")
                 store.put({dataset_id: value.dataset_id, details:value})
             }
             
           }
         )

          //store.put({id: 1, name:"test"})
          //store.put({id: 6, name:"test2"})

          //var datasetStore = db.createObjectStore('datasets', {keypathe:"id"});

        }

        
        this.router.navigateByUrl('/userprofile/'+ this.user.user.first_name+this.user.user.last_name);       
      }

    )
    

  }
}
