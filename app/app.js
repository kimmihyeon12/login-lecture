"use strict"

const express = require("express");
const app = express();
 
//앱 세팅
const home = require("./src/routes/home");
app.set("views","./src/views");
app.set("view engine" , "ejs");
 
app.use("/", home);
//src public 폴더 
app.use(express.static(`${__dirname}/src/public`));
module.exports = app;

