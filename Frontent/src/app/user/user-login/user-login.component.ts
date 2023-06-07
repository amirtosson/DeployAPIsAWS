import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthServerFunctions } from "../../server-communications/user-auth";
import { DatasetsAPIs } from "../../server-communications/dataset-apis";
import { User } from "../../entities/user/user-entity";
import { SidebarService } from "../../services/sidebar-service.service";
import { LocalStorageServiceService } from "../../services/local-storage-service.service";
import { resolve } from 'dns';
declare var db: any;
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  user = new User();
  constructor(
    private router: Router,
    private sidebarService: SidebarService,
    private localStorageService: LocalStorageServiceService) { }

  ngOnInit(): void {
    this.sidebarService.setVisibility(false)
  }

  async defdb() {
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

  getAll() {
    return new Promise(async (resolve, reject) => {
      this.defdb().then(db => async function () {
        const request = await db.transaction("datasets", "readwrite").objectStore("datasets").get("VTJGc2RHVmtYMS96VzZ6NmE1NGR6YllVR0Zid2xTZjMraEdrL2NadTJOOD0")
        request.onsuccess = await function (r) {
          resolve("sucess")
        }
      }



      )

    }

    )
  }

  OnLoginClicked() {
    var userName = document.getElementById("username") as HTMLInputElement;
    //this.router.navigateByUrl('/userprofile/'+ userName.value);
    var userPassword = document.getElementById("userpwd") as HTMLInputElement;
    UserAuthServerFunctions.LoginUser(userName.value, userPassword.value)
      .then
      (
        res => {
          this.user = res
          sessionStorage.setItem("userData", JSON.stringify(this.user.user));
          sessionStorage.setItem('isLogged', "true");
          sessionStorage.setItem('user_id', res.user_id);
          sessionStorage.setItem('user_token', res.user_token)
          sessionStorage.setItem('first_name', res.first_name)
          sessionStorage.setItem('last_name', res.last_name)


        }
      )
      .then
      (
        () => {
          DatasetsAPIs.GetDatasetsByUserId(sessionStorage.getItem('user_id'))
            .then(
              res => {
                const iterator = res.values();
                for (const value of iterator) {
                  this.localStorageService.AddItem(value)
                }

              }
            )
          this.router.navigateByUrl('/userprofile/' + this.user.user.first_name + this.user.user.last_name);
        }

      )


  }
}
