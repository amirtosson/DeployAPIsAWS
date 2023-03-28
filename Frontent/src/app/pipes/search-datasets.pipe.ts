import { Pipe, PipeTransform } from '@angular/core';
import { Dataset } from "../entities/dataset/dataset-entity";

@Pipe({
  name: 'filterdata'
})
export class SearchDatasetsPipe implements PipeTransform {

 
    transform(data: Dataset[], searchTxt: string, methodName:string, typeName:string, ownerFilter:string){
        if (searchTxt === '' && methodName ==="all" && typeName ==="all" && ownerFilter ==="-1") {
            return data
        }
        else{
            return data.filter((dataset) =>
            {

                if(methodName ==="all") methodName=""
                if(typeName ==="all") typeName=""

                if (ownerFilter == "-1") {
                    return dataset.dataset_name.toLocaleLowerCase().includes(searchTxt.toLocaleLowerCase()) 
                    && dataset.method_name.toLocaleLowerCase().includes(methodName.toLocaleLowerCase())
                    && dataset.dataset_type.toLocaleLowerCase().includes(typeName.toLocaleLowerCase())
                } else {
                    return dataset.dataset_name.toLocaleLowerCase().includes(searchTxt.toLocaleLowerCase()) 
                    && dataset.method_name.toLocaleLowerCase().includes(methodName.toLocaleLowerCase())
                    && dataset.dataset_type.toLocaleLowerCase().includes(typeName.toLocaleLowerCase())
                    && dataset.owner_id == ownerFilter
                }


               

            }
            )
        }
      };
  }