import { Component, OnInit } from '@angular/core';
import { BotAPIs } from "../../server-communications/bot-apis";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  userMSG = "";
  msgHistory:string[] = []
  showLoader = false

  constructor() { }

  ngOnInit(): void {
  }

  SendMSG(){
    this.msgHistory.push(this.userMSG)
    this.showLoader = true
    BotAPIs.SendMsg(this.userMSG)
    .then(
      res=>{
        this.showLoader = false
        this.msgHistory.push(res.answer)
      }
    )
    this.userMSG = ""
  }

  // ShowMSG(msg:string){
    
  //   this.msgHistory.push(msg)
  // }

}
