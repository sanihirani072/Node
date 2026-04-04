const express = require('express');
const app = express();


//Data Read by express
app.use(express.json()); //Body Json Data Read
app.use(express.urlencoded({extended: true})); //Body Form Data Read


//ejs setup
app.set("view engine","ejs");
//ejs -->view 


app.get('/',(req,res)=>{
    res.render('index');
});

//Task File Manager --> Create a file for every task (Tasks Folder) 
//red, red.parmas , req.body

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});
