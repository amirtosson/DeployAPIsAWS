export class ELNApis{
    static async UpdateElnByDOI(eln_name: string, eln_doi:string, eln_data:any) 
    {
        const response = await fetch
        (
            'https://server.daphne-nfdi.com/updatelabbook',  
        {
            method:'POST',
            headers: {
                'Content-Type':'application/json', 
                'Access-Control-Allow-Origin': '*'
            }, 
            body: JSON.stringify({
                'eln_name':eln_name, 
                'eln_doi':eln_doi, 
                'eln_data':eln_data })                  
        }
        );
        const res = await response.json();

        return res;
    }

    static async UpdateElnTitleByDOI(eln_name: string, eln_doi:string) 
    {
        const response = await fetch
        (
            'https://server.daphne-nfdi.com/updatelabbooktitle',  
        {
            method:'POST',
            headers: {
                'Content-Type':'application/json', 
                'Access-Control-Allow-Origin': '*'
            }, 
            body: JSON.stringify({
                'eln_name':eln_name, 
                'eln_doi':eln_doi })                  
        }
        );
        const res = await response.json();

        return res;
    }

  static async GetElnsList(eln_owner_id: string) 
  {
    const response = await fetch
    (
        //18.197.145.132
      'https://server.daphne-nfdi.com/getlabbooklist', 
      {
        method:'GET',
        headers: {
            'Content-Type':'application/json', 
            'Access-Control-Allow-Origin': '*',
            'eln_owner_id':eln_owner_id
          } 
      }
    );
    const res = await response.json();

    return res;
  }

  static async CreateNewELN(eln_owner_id: string, eln_name:string) 
  {
    const response = await fetch
    (
        //18.197.145.132
      'https://server.daphne-nfdi.com/createlabbook', 
      {
        method:'POST',
        headers: {
            'Content-Type':'application/json', 
            'Access-Control-Allow-Origin': '*',
            'eln_owner_id':eln_owner_id
          }, 
          body: JSON.stringify({'eln_name':eln_name })     
      }
    );
    const res = await response.json();

    return res;
  }
}