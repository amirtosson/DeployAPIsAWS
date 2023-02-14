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
}
