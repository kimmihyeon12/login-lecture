"use strict"

const id = document.querySelector("#id");
const password = document.querySelector("#password");
const loginBtn = document.querySelector("#button");

loginBtn.addEventListener("click", login);

function login(){
    const req = {
        id: id.value,
        password : password.value,
    }
  
 fetch("/login", {
    method: "POST",
 
    headers: {
      'Content-Type': "application/json"
    },
    body: JSON.stringify(req),
    
 }).then((res)=>res.json()) // 🥕
 .then((res)=>{
   if(res.success){
    location.href="http://localhost:3000/";
     alert(res.success);
   }else{
     alert(res.msg);
   }
 });
}
