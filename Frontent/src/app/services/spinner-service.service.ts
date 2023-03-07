import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerServiceService {

  public showSpinner = new BehaviorSubject(false);
  constructor() { }
  setVisibility(show:boolean) {
    this.showSpinner.next(show);
  }
}
