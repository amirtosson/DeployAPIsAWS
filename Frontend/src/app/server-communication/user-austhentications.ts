export class UserServerFunctions {
  static async LoginUser(user_name: string, user_pwd: string) 
  {
    const response = await fetch
    (
      'http://141.99.126.53:3050/login', 
      {
        method:'POST',
        headers: {
            'Content-Type':'application/json', 
            'Access-Control-Allow-Origin': '*'
          }, 
        body: JSON.stringify({'user_name':user_name, 'user_pwd':user_pwd })                  
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

  static async RegisterNewUser() {
    
  }


}