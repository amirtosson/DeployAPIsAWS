import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  public flyingBtnType = new BehaviorSubject("hidden");

  constructor() { }
  setHeaderBarItems(typeName:string) {
    this.flyingBtnType.next(typeName);
  }
}
