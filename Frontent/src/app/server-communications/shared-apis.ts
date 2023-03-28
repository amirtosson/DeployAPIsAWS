export class SharedApis{
    static async GetELNsDatasetsLinksByELNId(eln_id: string) 
    {
        const response = await fetch
        (
            //'http://18.197.145.132:3002/getlinkeddatasetsbyelnid', 
            'http://141.99.126.53:3002/getlinkeddatasetsbyelnid',
            {
                method:'GET',
                headers: {
                    'Content-Type':'application/json', 
                    'Access-Control-Allow-Origin': '*',
                    'eln_id':eln_id
                    
                }           
            }
        );
        const res = await response.json();
        return res;
    }
}