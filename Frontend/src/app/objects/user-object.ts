export class User{
    userData:{ [key: string]: any } =
    {
        user_token:"" ,
        role_name: "",
        working_group: "",
        first_name: "",
        last_name: "",
        date_birth: "",
        email: "",
        organization: "",
        position: "",
        department: "",
        location: "",
        phone_number: "",
        topics: [''],
        user_id:-1
    };
    constructor(){}   

    UserMap(user: any, token:string, working_group:string, user_role: string)
    {
        var keys = Object.keys(user)
        keys.forEach(k =>{
            this.userData[k] = user[k];
           
        })
        this.userData['user_token'] = token;
        this.userData['working_group'] = working_group;
        this.userData['role_name'] = user_role;
    }

}
