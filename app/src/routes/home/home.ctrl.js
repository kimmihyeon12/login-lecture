"use strict"
const users = {
    id : ["123" , "akak" , "미현"],
    password : ["123","234","2345"],
};
const output  ={
    home: (req,res)=>{
        res.render("home/index");
    },
    login : (req,res)=>{
        res.render("home/login");
    },
};
const process  ={
    login : (req,res)=>{
        //프론트엔드에서전달한 request -> js -> roter index -> cont
     
      const id = req.body.id;
      const password = req.body.password;
       

      if(users.id.includes(id)){
          const idx = users.id.indexOf(id);
          console.log("id");
           if(users.password[idx]=== password){
            console.log("password");
               return res.json({
                   success: true,
              
               });
           } 
              
           
      }
      return res.json({
        success: false,
        msg:"로그인 실패"
    });
  
   
    },
};


 module.exports= {
    output,
    process,
 };