export class GeneralAPIs {
    static async GetDataStructuresList() 
    {
      const response = await fetch
      (
        'http://141.99.126.53:3050/getdatastructureslist', 
        {
          method:'GET',
          headers: {
              'Content-Type':'application/json', 
              'Access-Control-Allow-Origin': '*'
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

    static async GetMethodsList() 
    {
      const response = await fetch
      (
        'http://141.99.126.53:3050/getmethodslist', 
        {
          method:'GET',
          headers: {
              'Content-Type':'application/json', 
              'Access-Control-Allow-Origin': '*'
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
    
}