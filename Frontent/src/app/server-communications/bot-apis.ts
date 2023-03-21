export class BotAPIs {
    static async SendMsg(msg: string) 
    {
        const response = await fetch
        (
           'http://18.197.145.132:3002/bot/msg',  
             //'http://141.99.126.53:3002/bot/msg',
        {
            method:'POST',
            headers: {
                'Content-Type':'application/json', 
                'Access-Control-Allow-Origin': '*'
            }, 
            body: JSON.stringify({'msg':msg})                  
        }
        );
        const res = await response.json();

        return res;
    }
}