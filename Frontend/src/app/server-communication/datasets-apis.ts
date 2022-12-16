export class DatasetsAPIs {
    static async GetDatasetsByUserId(user_id: string) 
    {
      const response = await fetch
      (
        'http://141.99.126.53:3050/getdatasetsbyuserid', 
        {
          method:'GET',
          headers: {
              'Content-Type':'application/json', 
              'Access-Control-Allow-Origin': '*', 
              'user_id':user_id
            },                
        }
      );
  
      if (response.status == 200)
      {
        const res = await response.json();
        return res;
      }
      else
      {
        return -1;
      }
    } 



    static async AddMetadataItem(dataset_doi: string, new_key:string, new_value:string) 
    {
      const response = await fetch
      (
        'http://141.99.126.53:3050/addmetadataitem', 
        {
          method:'POST',
          headers: {
              'Content-Type':'application/json', 
              'Access-Control-Allow-Origin': '*', 
              'dataset_doi':dataset_doi
            }, 
             
        body: JSON.stringify({'key':new_key, 'value':new_value })                
        }
      );
  
      if (response.status == 200)
      {
        return true;
      }
      else
      {
        return -1;
      }
    }


    static async GetMetadataByDoi(dataset_doi: string) 
    {
      const response = await fetch
      (
        'http://141.99.126.53:3050/getmetadatabydoi', 
        {
          method:'GET',
          headers: {
              'Content-Type':'application/json', 
              'Access-Control-Allow-Origin': '*', 
              'dataset_doi':dataset_doi
            },                
        }
      );
  
      if (response.status == 200)
      {
        const res = await response.json();
        return res;
      }
      else
      {
        return -1;
      }
    } 


    static async SingleFileCheck(dataset_doi: string) 
    {
      const response = await fetch
      (
        '/api/python/checkdataset', 
        {
            method:'POST',
            headers: {
                'Content-Type':'application/json', 
                'Access-Control-Allow-Origin': '*', 
                'Accept': 'application/json', 
                'dataset_doi':dataset_doi
            }
        }
      );
  
      if (response.status == 200)
      {
        
        const res = await response.json();
        return res;
      }
      else
      {
        return -1;
      }
    } 

    static async PerformACalculation(dataset_doi: string, calc_name:string, col_number:any) 
    {
      const response = await fetch
      (
        '/api/python/performcalculation', 
        {
            method:'POST',
            headers: {
                'Content-Type':'application/json', 
                'Access-Control-Allow-Origin': '*', 
                'Accept': 'application/json', 
                'dataset_doi':dataset_doi
            },
            body: JSON.stringify(
                {
                    'calc_name':calc_name,
                    'col_number':col_number
                }) 
        }
      );
  
      if (response.status == 200)
      {
        
        const res = await response.json();
        return res;
      }
      else
      {
        return -1;
      }
    }


    static async GetDatasetCols(dataset_doi: string, col1_name:string, col2_name:string) 
    {
      const response = await fetch
      (
        '/api/python/getdatasetcols', 
        {
            method:'GET',
            headers: {
                'Content-Type':'application/json', 
                'Access-Control-Allow-Origin': '*', 
                'Accept': 'application/json', 
                'dataset_doi':dataset_doi,
                'col1_name':col1_name,
                'col2_name':col2_name
            }
        }
      );
  
      if (response.status == 200)
      {
        
        const res = await response.json();
        return res;
      }
      else
      {
        return -1;
      }
    }

    static async GetDatasetActivities(dataset_doi: string) 
    {
      const response = await fetch
      (
        'http://141.99.126.53:3050/getdatasetactivites', 
        {
            method:'GET',
            headers: {
                'Content-Type':'application/json', 
                'Access-Control-Allow-Origin': '*', 
                'Accept': 'application/json', 
                'dataset_doi':dataset_doi,
            }
        }
      );
  
      if (response.status == 200)
      {
        
        const res = await response.json();
        return res;
      }
      else
      {
        return -1;
      }
    }

    static async InsertDatasetActivity(dataset_doi: string, created_by:any, activity:string) 
    {
      const response = await fetch
      (
        'http://141.99.126.53:3050/insertdatasetactivity', 
        {
            method:'POST',
            headers: {
                'Content-Type':'application/json', 
                'Access-Control-Allow-Origin': '*', 
                'Accept': 'application/json', 
                'dataset_doi':dataset_doi,
            },
            body: JSON.stringify(
                {
                    'created_by':created_by,
                    'activity':activity
                }) 
        }
      );
  
      if (response.status == 200)
      {
        
        const res = await response.json();
        return res;
      }
      else
      {
        return -1;
      }
    }

    static async GetAttachedFilesByDatasetDoi(dataset_doi: string){
        const response = await fetch
        (
          '/api/python/getattachedfilesbydoi', 
          {
              method:'GET',
              headers: {
                  'Content-Type':'application/json', 
                  'Access-Control-Allow-Origin': '*', 
                  'Accept': 'application/json', 
                  'dataset_doi':dataset_doi,
              }
          }
        );
    
        if (response.status == 200)
        {
          
          const res = await response.json();
          return res;
        }
        else
        {
          return -1;
        }
    }


}