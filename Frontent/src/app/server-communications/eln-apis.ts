export class ELNApis{
    static async SaveEln(eln_owner_id: string, eln_name: string, eln_doi:string, eln_data:any) 
    {
        const response = await fetch
        (
            'http://localhost:3002/savelabbook',  
        {
            method:'POST',
            headers: {
                'Content-Type':'application/json', 
                'Access-Control-Allow-Origin': '*'
            }, 
            body: JSON.stringify({
                'eln_owner_id':eln_owner_id, 
                'eln_name':eln_name, 
                'eln_doi':eln_doi, 
                'eln_data':eln_data })                  
        }
        );
        const res = await response.json();

        return res;
    }

  static async GetEln(eln_doi: string) 
  {
    const response = await fetch
    (
        //18.197.145.132
      'http://localhost:3002/getlabbook', 
      {
        method:'GET',
        headers: {
            'Content-Type':'application/json', 
            'Access-Control-Allow-Origin': '*',
            'eln_doi':eln_doi
          }, 
      }
    );
    const res = await response.json();

    return res;
  }
}