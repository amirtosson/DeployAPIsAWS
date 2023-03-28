export class ELNItem{
    elnData:{ [key: string]: any }
    = {
        eln_id: -1,
        eln_doi: "",
        eln_name :"",
        eln_owner_id : -1,
        first_name : "",
        last_name : "",
        eln_last_modified_on : "",
        eln_added_on : "",
        eln_data : "",
        linked_datasets_names : [],
        linked_datasets_ids : []
    }



    eln_id = -1;
    eln_doi = "";
    eln_name = "";
    eln_owner_id = -1;
    first_name = "";
    last_name = "";
    eln_last_modified_on = "";
    eln_added_on = "";
    eln_data = "";
    linked_datasets_names = [""];
    linked_datasets_ids = [-1];

    ELNMap(eln: any){
        var keys = Object.keys(eln)
        keys.forEach(k =>{
            this.elnData[k] = eln[k]
           
        })
    }

}