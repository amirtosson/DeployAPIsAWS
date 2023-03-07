import { Pipe, PipeTransform } from '@angular/core';
import { ELNItem } from "../entities/elns/eln-item";

@Pipe({
  name: 'filter'
})
export class SearchPipe implements PipeTransform {

 
    transform(data: ELNItem[], searchTxt: string ){
        if (searchTxt === '') {
            return data
        }
        else{
            return data.filter((eln) =>
            {
                return eln.eln_name.toLocaleLowerCase().includes(searchTxt.toLocaleLowerCase())
            }
            )
        }
      };
  }