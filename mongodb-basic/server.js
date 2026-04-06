const express = require("express");
const app = express();
const userModel = require("./models/userModel");
const { Query } = require("mongoose");


app.use(express.json());
app.use(express.urlencoded({ extended: true }));



//ejs setup
app.set("view engine", "ejs");
// ejs engine --> views folder

app.get("/", (req, res) => {
    res.render("index");
});


//CRUD Operations

//1.create
app.post("/create", async (req, res) => {
    // const user = userModel.create(req.body);
    // res.send(user);

    // if want use this
    // let fname = req.body.fname;
    // let uname = req.body.uname;
    // let email = req.body.email;
    // let img = req.body.img;

    let { fname, uname, email, img } = req.body;

   let createdUser = await userModel.create({
        fullname:fname,
        username:uname,
        email:email,
        image:img,
    });

    res.redirect("/card");
});

//2.Read
app.get("/card", async (req,res)=>{
    let CardData = await userModel.find();

    res.render("card",{data:CardData});
});

//Update
app.get("/edit/:id", async (req,res)=>{
    //show data into filed
    let singleUser = await userModel.findOne({_id:req.params.id});

    res.render("edit",{data: singleUser});
});

//update user
app.post("/update/:id", async (req,res)=>{
let {fname,uname,email,img} = req.body;
await userModel.findOneAndUpdate(
   
    {_id: req.params.id},
    {
        fullname:fname,
        username:uname,
        email:email,
        image:img,
    },
    {new: true},
);

    res.redirect("/card");
});


//Delete
app.get("/delete/:id", async (req,res)=>{
   await userModel.findOneAndDelete({_id:req.params.id});

    res.redirect("/card");
});

app.listen("3100", () => {
    console.log("Server is running on port 3100");
});