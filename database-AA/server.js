const express = require("express");
const app = express();
const { default: chalk } = require("chalk");
const CookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(CookieParser());


app.get("/", (req, res) => {
    res.cookie("name", "test_user");
    res.send("Server Homepage");
});


//bcrypt => 
// 1.Ecrypt => 
//password -->salt(10) ==> hash ==> hash + salt



app.get("/register", (req, res) => {
    // res.render("register");
    bcrypt.hash("abc@23",10,(err,hash)=>{
    console.log(hash);

    res.send("password hashed successfully");
});
});


// 2.descryt(compare)
app.get("/compare",(req,res)=>{
bcrypt.compare("abc@23","$2b$10$kQvlY0iMFEF9AVC5C8UOQ.bum7q5LWXGBZp/NXJLfVdAThHBC4y6W",(err,result)=>{
    console.log(result);
    },
)
});

app.get("/create", (req, res) => {
    let email = "test123@gmail.com"
    let token =jwt.sign({email},"aabbccdd");

    res.cookie("token",token);

    // res.render("login");
    res.send("Token created successfully");
});
// website --> server --> website
// login(username,password | token(username, token save in your browser)) --> server -->  profile
// login requirement - saved post (token will be send with all request)--> server --> save post
// 401 - unauthorized and can't access data(token expired and cause: token removed from your browser)


app.listen(3200, () => {
    console.log(chalk.bgBlue.bold("Server is running on port 3200"));
});