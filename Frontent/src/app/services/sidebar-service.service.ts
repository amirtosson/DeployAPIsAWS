import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  public currentPage = new BehaviorSubject("");
  constructor() { }
  setCurrentPage(pageName:string) {
    this.currentPage.next(pageName);
  }
}
