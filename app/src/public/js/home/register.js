"use strict"

const id = document.querySelector("#id");
const name = document.querySelector("#name");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const registerBtn = document.querySelector("#button");
 
registerBtn.addEventListener("click", register);

function register(){
    if(!id.value){
        return alert("아이디 입력해주세요 ");
    }
    if(password.value != confirmPassword.value){
        return alert("비밀번호일치하지않음");
    }
    const req = {
        id: id.value,
        name: name.value,
        password : password.value,
     }
  console.log(req);
 fetch("/register", {
    method: "POST",
 
    headers: {
      'Content-Type': "application/json"
    },
    body: JSON.stringify(req),
    
 }).then((res)=>res.json())
 .then((res)=>{
   if(res.success){
    location.href="http://localhost:3000/login";
     alert(res.success);
   }else{
     alert(res.msg);
   }
 }) 
}
