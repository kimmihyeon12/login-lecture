"use strict"

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
 
//앱 세팅
const home = require("./src/routes/home");
app.set("views","./src/views");
app.set("view engine" , "ejs");
 
app.use("/", home);
app.use(express.json());
app.use(express.urlencoded({ extended : true }));

//src public 폴더 
app.use(express.static(`${__dirname}/src/public`));
module.exports = app;

