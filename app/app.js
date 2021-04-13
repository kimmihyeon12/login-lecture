"use strict"

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
 
//앱 세팅
const home = require("./src/routes/home/router");
app.set("views","./src/views");
app.set("view engine" , "ejs");
 

app.use(express.static(`${__dirname}/src/public`));
app.use(express.json());
app.use(express.urlencoded({ extended : true }));
app.use("/", home);
//src public 폴더 

module.exports = app;

