export class DatasetsAPIs {
    static async GetDatasetsByUserId(user_id:any){

      const response = await fetch
        (
        'https://server.daphne-nfdi.com/getdatasetsbyuserid', 
        {
            method:'GET',
            headers: {
                'Content-Type':'application/json', 
                'Access-Control-Allow-Origin': '*',
                'user_id':user_id
            }, 
                         
        }
        );
    const res = await response.json();

    return res;
  }

    static async GetMetadataByDoi(dataset_doi:any)
    {
        const response = await fetch
        (
        'https://server.daphne-nfdi.com/getmetadatabydoi', 
        {
            method:'GET',
            headers: {
                'Content-Type':'application/json', 
                'Access-Control-Allow-Origin': '*',
                'dataset_doi':dataset_doi
            }, 
                        
        }
        );
        const res = await response.json();

        return res;
    }

    static async AddMetadataItem(dataset_doi:any, item_key:any, item_value:any)
    {
        const response = await fetch
        (
        'https://server.daphne-nfdi.com/addmetadataitem', 
        {
            method:'POST',
            headers: {
                'Content-Type':'application/json', 
                'Access-Control-Allow-Origin': '*',
                'dataset_doi':dataset_doi
            },  
            body: JSON.stringify({'key':item_key, 'value':item_value })             
        }
        );
        const res = await response.json();

        return res;
    }


    static async DeleteMetadataItem(dataset_doi:any, item_key:any, item_value:any)
    {
        const response = await fetch
        (
        'https://server.daphne-nfdi.com/deletemetadataitem', 
        {
            method:'POST',
            headers: {
                'Content-Type':'application/json', 
                'Access-Control-Allow-Origin': '*',
                'dataset_doi':dataset_doi
                
            },  
            body: JSON.stringify({'key':item_key, 'value':item_value })             
        }
        );
        const res = await response.json();

    }


    static async EditMetadataItem(dataset_doi:any, old_key:any, old_value:any, new_key:any, new_value:any)
    {
        const response = await fetch
        (
        'https://server.daphne-nfdi.com/Editmetadataitem', 
        {
            method:'POST',
            headers: {
                'Content-Type':'application/json', 
                'Access-Control-Allow-Origin': '*',
                'dataset_doi':dataset_doi
                
            },  
            body: JSON.stringify({
                'old_key':old_key, 
                'old_value':old_value, 
                'new_key':new_key, 
                'new_value':new_value  })             
        }
        );
        const res = await response.json();

    }

    static async DeleteDatasetByDOI(dataset_doi:string, file_name:string)
    {
        const response = await fetch
        (
        'https://server.daphne-nfdi.com/deletedatasetbydoi', 
        {
            method:'POST',
            headers: {
                'Content-Type':'application/json', 
                'Access-Control-Allow-Origin': '*',
                
            },  
            body: JSON.stringify({'dataset_doi':dataset_doi, 'original_file_name':file_name })             
        }
        );
        const res = await response.json();

        return res;
    }
    

    static async AddFileDetailsToDatabases(dataset_details:any)
    {
        const response = await fetch
        (
        'https://server.daphne-nfdi.com/addfiletodatabases', 
        {
            method:'POST',
            headers: {
                'Content-Type':'application/json', 
                'Access-Control-Allow-Origin': '*',
                
            },  
            body: JSON.stringify({'dataset_details':dataset_details })             
        }
        );
        const res = await response.json();

        return res;
    }



}
