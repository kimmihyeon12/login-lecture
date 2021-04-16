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
    static #getUsers(data, fields){
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
    static getUsers(...fields){
        // const users = this.#users;
        return fs.readFile("./src/databases/user.json")
        .then((data)=>{
          return this.#getUsers(data,fields)
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
        const users = await this.getUsers("id","password","name");
        console.log(users);
        //데이터 추가

        //fs.writeFile("./src")
     
    }
}
module.exports = UserStorge;