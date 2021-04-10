"use strict"
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
      console.log(req.body);
    },
};


 module.exports= {
    output,
    process,
 };