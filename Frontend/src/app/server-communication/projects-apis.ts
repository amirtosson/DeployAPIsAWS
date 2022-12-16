export class ProjectsAPIs {
    static async GetProjectsByUserId(user_id: string) 
    {
      const response = await fetch
      (
        'http://141.99.126.53:3050/getuserprojects', 
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
  


}