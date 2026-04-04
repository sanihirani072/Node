const express = require("express");
const app = express();
const fs = require("fs");

// Data read by express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ejs setup
app.set("view engine", "ejs");

// Home Page
app.get("/", (req, res) => {
    fs.readdir("./tasks", (e, files) => {
        if (e) throw e;

        res.render("index.ejs", { files });
    });
});

// Create File
app.post("/create", (req, res) => {
    let data = `Title: ${req.body.title}\nDetails: ${req.body.task}`;

    fs.writeFile(
        `./tasks/${req.body.title.split(" ").join("-")}.txt`,
        data,
        (e) => {
            if (e) throw e;

            res.redirect("/");
        }
    );
});

// Read File
app.get("/files/:filename", (req, res) => {
    fs.readFile(`./tasks/${req.params.filename}`, "utf-8", (e, data) => {
        if (e) {
            console.log(e);
            return res.send("File not found");
        }

        res.render("read", {
            title: req.params.filename,
            task: data
        });
    });
});

// Open Edit Page
app.get("/edit/:filename", (req, res) => {
    res.render("edit", { filename: req.params.filename });
});

// Rename File
app.post("/edit", (req, res) => {
    const oldPath = `./tasks/${req.body.oldName}`;
    const newPath = `./tasks/${req.body.newName}.txt`;

    fs.rename(oldPath, newPath, (err) => {
        if (err) {
            console.log(err);
            return res.send("File rename failed");
        }

        res.redirect("/");
    });
});


// update file namne
 

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});