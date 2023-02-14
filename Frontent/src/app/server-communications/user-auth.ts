
export class UserAuthServerFunctions {

static async LoginUser(user_name: string, user_pwd: string) 
  {
    const response = await fetch
    (
      'http://18.197.145.132:3002/login', 
      {
        method:'POST',
        headers: {
            'Content-Type':'application/json', 
            'Access-Control-Allow-Origin': '*'
          }, 
        body: JSON.stringify({'user_name':user_name, 'user_pwd':user_pwd })                  
      }
    );
    const res = await response.json();

    return res;
  }
}
