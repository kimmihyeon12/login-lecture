"use strict"
const User = require('../../models/User');
const UserStorge = require('../../models/UserStorge')
const output  ={
    home: (req,res)=>{
        res.render("home/index");
    },
    login : (req,res)=>{
        res.render("home/login");
    },
    register : (req,res)=>{
        res.render("home/register");
    },
};
const process  ={
    login : async (req,res)=>{
        const user = new User(req.body);
        const response = await user.login();
        return res.json(response);
    },

    register : async (req,res)=>{
        const user = new User(req.body);
        const response = await user.register();
        return res.json(response);
    },

        //프론트엔드에서전달한 request -> js -> roter index -> cont
     
    //   const id = req.body.id;
    //   const password = req.body.password;
    //   const users = UserStorge.getUsers("id","password");
    //    const response = {};

    //   if(users.id.includes(id)){
    //       const idx = users.id.indexOf(id);
         
    //        if(users.password[idx]=== password){
    //          response.success = true;
    //            return res.json(response);
    //        } 
  
    //   }
    //   response.success = false;
    //   response.msg ="로그인실패";
    //    return res.json(response);
  
   
    
};


 module.exports= {
    output,
    process,
 };

 