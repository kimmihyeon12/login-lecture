"use strict"
const fs = require("fs").promises;

class UserStorge{
    static #getUserInfo(data,id){
        const users = JSON.parse(data);
        const idx = users.id.indexOf(id);
        const usersKeys =  Object.keys(users);
        const userInfo = usersKeys.reduce((newUser,info)=>{
            newUser[info] = users[info][idx]; //users["id"][0] 🍎
            return newUser;
        },{});
        return userInfo;
    }
    static #getUsers(data,isAll, fields){
        //reduce 사용법 이해하기 🥕
        const users = JSON.parse(data);
        if(isAll) return users;
        // user 모든 데이터 가져오기!
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
    static getUsers(isAll, ...fields){
        // const users = this.#users;
        return fs.readFile("./src/databases/user.json")
        .then((data)=>{
          return this.#getUsers(data,isAll,fields)
        })
        .catch(console.error);
        
    }
    
    static getUserInfo(id){
        //body.id와 같은 password 가져와 userInfo로 넘긴다
     return fs.readFile("./src/databases/user.json")
            .then((data)=>{
              return this.#getUserInfo(data,id)
            })
            .catch(console.error);
    }
    //<pending> 데이터를 모두 읽어오지 못했다 🥕
    static async save(userInfo){
        //json데이터 읽어온다음에 넣어주기
        const users = await this.getUsers(true);
        console.log(users);
        if(users.id.includes(userInfo.id)){
            throw "이미존재하는아이디입니다";
        }
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.password.push(userInfo.password);
        
        fs.writeFile("./src/databases/user.json" , JSON.stringify(users));
         return {success:true};
     
    }
}
module.exports = UserStorge;