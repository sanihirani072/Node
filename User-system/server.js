const express = require("express");
const CookieParser = require("cookie-parser");
const app = express();
const { default: chalk } = require("chalk");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("./models/user.model");
const postModel = require("./models/post.model");

//json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//cookie
app.use(CookieParser());

//ejs
app.set("view engine", "ejs");


app.get("/", (req, res) => {
    res.render("index");
    // res.send("server is running on port 3110");
});

app.get("/signup", (req, res) => {
    res.render("signup");
});

app.get("/profile", (req, res) => {
    // res.cookie("token", token);
    res.render("profile");
});

app.get("/post", auth, (req, res) => {
    res.render("post");
});

//create route
app.post("/create", (req, res) => {
    let { email, fullname, image, password } = req.body;
    console.log(req.body);


    //encrypt password

    bcrypt.hash(password, 10, async (err, hash) => {

        let createdUser = await userModel.create({
            email,
            fullname,
            image,
            password: hash,
            // password:bcrypt.hashSync(password,10)
        });
        console.log(createdUser);

        let token = jwt.sign({ email }, "aabbcc");

        res.cookie("token", token);
        // console.log(token);
        // res.render("profile", { data: createdUser });
        // console.log("User created");
    });
    res.redirect("/");

});

app.post("/login", async (req, res) => {
    // let { email, password } = req.body;
    let user = await userModel.findOne({ email: req.body.email });
    console.log(user)
    if (!user) {
        return res.send("user not found");
    }

    bcrypt.compare(req.body.password, user.password, (err, result) => {
        if (result) {
            let token = jwt.sign({ email: user.email }, "aabbcc");
            res.cookie("token", token);
            res.redirect("/profile");
        } else {
            res.send("wrong password");
            // res.redirect("/login");
        }
    });
});

// middleware
function auth(req, res, next) {
    console.log(req.cookies);
    let token = req.cookies.token;
    if (!token) return res.send("You are not logged in");

    let verified = jwt.verify(token, "aabbcc");
    next();
}


app.get("/profile", async (req, res) => {
    // 1. Get the token from the cookies
    let token = req.cookies.token;

    // If there is no token, send them back to the login page
    if (!token) {
        return res.redirect("/");
    }

    try {
        // 2. Decode the token to get the email we stored in it during login/signup
        let decoded = jwt.verify(token, "aabbcc");

        // 3. Find that specific user in the database
        let loggedInUser = await userModel.findOne({ email: decoded.email });

        // If user doesn't exist in DB somehow, redirect to login
        if (!loggedInUser) {
            return res.redirect("/");
        }

        // 4. Render the profile page and pass the user data!
        // This is what fixes your "user is not defined" error.
        res.render("profile", { user: loggedInUser });

    } catch (err) {
        // If the token is fake or expired, redirect to login
        res.redirect("/");
    }
});

app.get("/logout", (req, res) => {
    res.clearCookie("token");
    res.redirect("/");
});


app.post("/post", auth, async (req, res) => {
    let { title, message, image } = req.body;   

  let user = await userModel.findOne({ email: req.user.email }); //changed body
    // postModel.create(req.body);
    // res.redirect("/post");
    let createdPost = await postModel.create({
        title,
        message,
        image,
        userID: user._id,
    });

    user.posts.push(createdPost._id);
    await user.save();

    res.redirect("/profile");
});


app.listen(3110, () => {
    console.log(chalk.bgBlue.bold(" Server is running on port 3110"));
});