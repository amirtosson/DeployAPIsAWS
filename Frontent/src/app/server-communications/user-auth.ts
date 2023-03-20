
export class UserAuthServerFunctions {

static async LoginUser(user_name: string, user_pwd: string) 
  {
    const response = await fetch
    (
      'http://18.197.145.132:3002/login', 
      //'http://141.99.126.53:3002/login', 
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

  static async CheckLoginNameAvailiability(user_name: string) 
  {
    const response = await fetch
    (
      'http://18.197.145.132:3002/checknameavailability', 
     //' http://141.99.126.53:3002/checknameavailability',
      {
        method:'POST',
        headers: {
            'Content-Type':'application/json', 
            'Access-Control-Allow-Origin': '*'
          }, 
        body: JSON.stringify({'user_name':user_name})                  
      }
    );
    const res = await response.json();

    return res;
  }

  static async SignUp(newUser: any) 
  {
    const response = await fetch
    (
      'http://18.197.145.132:3002/signup', 
     //' http://141.99.126.53:3002/signup',
      {
        method:'POST',
        headers: {
            'Content-Type':'application/json', 
            'Access-Control-Allow-Origin': '*'
          }, 
        body: JSON.stringify({newUser})                  
      }
    );
    const res = await response.json();

    return res;
  }
}



