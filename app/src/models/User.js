"use strict"
const UserStorge = require('./UserStorge');
class User{
    constructor(body){
        this.body = body;
    }
    login(){
     const client =  this.body;
     // const {id,password} = UserStorge.getUsers("id","password");
     // console.log(id,password);
     const {id,password} = UserStorge.getUserInfo(client.id);
     if(id){
         if(id===client.id && password===client.password){
         return {success:true};
         }
         return {success:false,msg:"비밀번호가 틀렸습니다"};
     }
     return {success:false,msg:"존재하지 않는 아이디 입니다"};
   
    }
    register(){
        const client =  this.body;
        const response = UserStorge.save(client);
        return response;
    }
    

}

module.exports = User;