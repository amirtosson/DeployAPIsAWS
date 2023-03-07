import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jsPDF from 'jspdf';
import { SpinnerServiceService } from "../../services/spinner-service.service";


import { ELNItem } from "../../entities/elns/eln-item";
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
  inUseELN = new ELNItem();
  public editorText = ""
  editingMode = false
  titleEditingMode = false

  modules = 
  {
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

  public previewImg = ""

  constructor(private router: Router, private spinnerService:SpinnerServiceService) { }

  ngOnInit(): void {
    this.inUseELN = JSON.parse(sessionStorage.getItem('in-use-eln')!)
    this.GeneratePreview()
    //sessionStorage.removeItem('eln')
  }

  GeneratePreview(){
    var previewEle = document.getElementById('preview') as HTMLDivElement;
    previewEle.innerHTML = this.inUseELN.eln_data
  }

  StartTitleEditing(start:boolean){
    this.titleEditingMode = start
  }

  UpdateELNName(){
    var newTitleEle = document.getElementById('new-title') as HTMLInputElement;
    ELNApis.UpdateElnTitleByDOI(newTitleEle.value,this.inUseELN.eln_doi)
    .then(
      res=>{
        this.inUseELN.eln_name = newTitleEle.value 
        this.StartTitleEditing(false)
      }
     
    )
  }

  StartEdit(){
    this.editingMode = true
    var previewEle = document.getElementById('preview') as HTMLDivElement;
    previewEle.style.display = "none"

  }
  SaveEdit(){
    ELNApis.UpdateElnByDOI(this.inUseELN.eln_name,this.inUseELN.eln_doi,this.inUseELN.eln_data)
    .then(
      res=>{
        this.editingMode = false
        var previewEle = document.getElementById('preview') as HTMLDivElement;
        previewEle.style.display = "block"
        this.GeneratePreview()
      }
    )
  }
  StartEditor(event: any) {
    event.root.innerHTML = this.inUseELN.eln_data;
   
  }


  EditorChanged(event: EditorChangeContent | EditorChangeSelection){
    this.inUseELN.eln_data = event['editor']['root']['innerHTML']
  }
  
  SaveAsPdf(){
    const doc = new jsPDF();
    const name = this.inUseELN.eln_name
    this.spinnerService.setVisibility(true)

   doc.html(this.inUseELN.eln_data,{
      callback:function(doc) {
          // Save the PDF
          doc.save(name +'.pdf');
      },
      x: 15,
      y: 15,
      width: 170, //target width in the PDF document
      windowWidth: 900 //window width in CSS pixels
  })
  .then(()=>{
    this.spinnerService.setVisibility(false)

  }
  
  )
  ;
   
   // doc.save('tableToPdf.pdf');
  }

}
