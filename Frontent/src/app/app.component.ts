import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DAPHNE';
  
  constructor
  (
    //public userService:UserService,
    //public flyingBtnService:GeneralService,
    private http: HttpClient
  ) { }
  

    

}


