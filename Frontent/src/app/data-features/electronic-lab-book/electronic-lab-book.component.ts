import { Component, OnInit } from '@angular/core';
import { ELNApis } from "../../server-communications/eln-apis";
import { EditorChangeContent, EditorChangeSelection } from "ngx-quill";
import * as QuillNamespace from 'quill';
let Quill: any = QuillNamespace;
import ImageResize from 'quill-image-resize-module';
Quill.register('modules/imageResize', ImageResize);
@Component({
  selector: 'app-electronic-lab-book',
  templateUrl: './electronic-lab-book.component.html',
  styleUrls: ['./electronic-lab-book.component.css']
})
export class ElectronicLabBookComponent implements OnInit {
  editorText = ""


  modules = {
    toolbar: [
    ['bold', 'italic', 'underline', 'strike'], // toggled buttons
    [{ 'header': 1 }, { 'header': 2 }], // custom button values
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    [{ 'script': 'sub' }, { 'script': 'super' }], // superscript/subscript
    [{ 'indent': '-1' }, { 'indent': '+1' }], // outdent/indent
    [{ 'direction': 'rtl' }], // text direction
    [{ 'size': ['small', false, 'large', 'huge'] }], // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    [{ 'color': [] }, { 'background': [] }], // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],
    ['clean'], // remove formatting button
    ['link', 'image'], // link and image, video
    ],
    imageResize: true // for image resize
    };


  constructor() { }

  ngOnInit(): void {
  }

  EditorChanged(event: EditorChangeContent | EditorChangeSelection){
    var prev = document.getElementById('preview') as HTMLDivElement;
    prev.innerHTML = event['editor']['root']['innerHTML']
    this.editorText = event['editor']['root']['innerHTML']
    // this.editorText = event['editor']['root']['innerHTML']
    //console.log(prev.innerHTML)
  }

  Save(){

    ELNApis.SaveEln("47","Testnam","DOITEST", this.editorText)
    .then(
      res=>{
        console.log(res)
      }
    )
  }

  Get(){}
}
