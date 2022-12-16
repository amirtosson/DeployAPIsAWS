import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatasetService {

  constructor() { }

  SetDatasetInUse(dataset_id:number, dataset_doi:string, dataset_name:string, structure_name:string  ){
    sessionStorage.setItem(dataset_doi, JSON.stringify(
      {
        "dataset_id":dataset_id, 
        "dataset_name":dataset_name, 
        "structure_name":structure_name, 
      }
      ));
  }
  GetDatasetInUse(dataset_doi:string ){
    return JSON.parse(sessionStorage.getItem(dataset_doi)!);
  }

}
