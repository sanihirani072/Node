//package.json ==> type = commonjs ==> const express = require('express')
// package.json ==> type = module ==> import express from 'express'


const express = require("express");
const path = require("path");

const app = express();
// const app = express()

//create a router
app.get('/',(req,res)=>{
    res.send('Hello Dadu ji, ke bete😎 !!');
});

app.get('/about',(req,res)=>{
    res.send('Hello About Dadu ji 😜!!');
});

app.get("/profile",function(req,res){
    res.send("Hello Profile 🏠 !!");
});

app.get("/login",function(req,res){
    const __dirname = path.resolve();
    const filePath = path.join(__dirname,"./Pages/login.html");
    res.sendFile(filePath);
});

app.listen(2006,()=>{
    console.log(' 🐺Server is running 🏃💨 2006 port');
});

