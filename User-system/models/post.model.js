const mongoose = require("mongoose");
// const { default: chalk } = require("chalk");


mongoose.connect('mongodb://127.0.0.1:27017/user-system');

let postSchema = new mongoose.Schema({
    userID:[{type:mongoose.Schema.Types.ObjectId,ref:'user'}],
    title: String,
    message: String,
    image: String,
});

module.exports = mongoose.model('post', postSchema);