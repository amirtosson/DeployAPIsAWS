import { Pipe, PipeTransform } from '@angular/core';
import { Dataset } from "../entities/dataset/dataset-entity";

@Pipe({
  name: 'filterdata'
})
export class SearchDatasetsPipe implements PipeTransform {

 
    transform(data: Dataset[], searchTxt: string, methodName:string){
        if (searchTxt === '' && methodName ==="all") {
            return data
        }
        else{
            return data.filter((dataset) =>
            {

                if(methodName ==="all") methodName=""

                return dataset.dataset_name.toLocaleLowerCase().includes(searchTxt.toLocaleLowerCase()) &&
                dataset.method_name.toLocaleLowerCase().includes(methodName.toLocaleLowerCase())
            }
            )
        }
      };
  }