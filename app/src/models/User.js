"use strict"
const UserStorge = require('./UserStorge');
class User{
    constructor(body){
        this.body = body;
    }
    login(){
     const body =  this.body;
     // const {id,password} = UserStorge.getUsers("id","password");
     // console.log(id,password);
     const {id,password} = UserStorge.getUserInfo(body.id);
     if(id){
         if(id===body.id && password===body.password){
         return {success:true};
         }
         return {success:false,msg:"비밀번호가 틀렸습니다"};
     }
     return {success:false,msg:"존재하지 않는 아이디 입니다"};
   
    }
    

}

module.exports = User;