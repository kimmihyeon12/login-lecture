"use strict"
const UserStorge = require('./UserStorge');
class User{
    constructor(body){
        this.body = body;
    }
    async login(){
     const client =  this.body;
     //await -> 항상 promise반환해주는곳에만 할수있음!
     const {id,password} = await UserStorge.getUserInfo(client.id);
    if(id){
         if(id===client.id && password===client.password){
         return {success:true};
         }
         return {success:false,msg:"비밀번호가 틀렸습니다"};
     }
     return {success:false,msg:"존재하지 않는 아이디 입니다"};
   
    }
    async register(){
        const client =  this.body;
        try{
        const response = await UserStorge.save(client);
        return response;
        }catch(err){
            return {success: false , msg :err};
        }
       
    }
    

}

module.exports = User;