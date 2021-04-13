"use strict"
class UserStorge{
    static #users = {
        id : ["123" , "akak" , "미현"],
        password : ["123","234","2345"],
        name: ["algus","미현","면"],
    };

    static getUsers(...fields){
        const users = this.#users;
        //reduce 사용법 이해하기 🥕
        const newUsers = fields.reduce((newUsers,field)=>{
         //   console.log(newUsers,field);
            if(users.hasOwnProperty(field)){
           //     console.log(users[field]);
                newUsers[field]=users[field];
            }
            return newUsers;
        },{});
       // console.log(newUsers);
        return newUsers;
    }
    static getUserInfo(id){
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const usersKeys =  Object.keys(users);
        const userInfo = usersKeys.reduce((newUser,info)=>{
            newUser[info] = users[info][idx]; //users["id"][0] 🍎
            return newUser;
        },{});
        return userInfo;
    }
}
module.exports = UserStorge;