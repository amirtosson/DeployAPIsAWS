export class DatasetsAPIs {
    static async GetDatasetsByUserId(user_id:any){

      const response = await fetch
        (
        'http://18.197.145.132:3002/getdatasetsbyuserid', 
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
        'http://18.197.145.132:3002/getmetadatabydoi', 
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
        'http://18.197.145.132:3002/addmetadataitem', 
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

    static async DeleteDatasetByDOI(dataset_doi:string, file_name:string)
    {
        const response = await fetch
        (
        'http://18.197.145.132:3002/deletedatasetbydoi', 
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
        'http://18.197.145.132:3002/addfiletodatabases', 
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
