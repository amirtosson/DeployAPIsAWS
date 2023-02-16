import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  public showToolbar = new BehaviorSubject(false);
  constructor() { }
  setVisibility(show:boolean) {
    this.showToolbar.next(show);
  }
}
