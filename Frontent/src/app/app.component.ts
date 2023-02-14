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
  
  onSubmit(){
    console.log("OK")
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Origin':'*'
    }
    
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };

    this.http.get<any>('http://52.59.110.241:8080/aws/test', requestOptions)
    .subscribe(
      res=>{
        console.log(res)
      }
    )
  }

}


