const mongoose = require("mongoose");
const { default: chalk } = require("chalk");


mongoose.connect('mongodb://127.0.0.1:27017/user-system');

let userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    fullname:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    posts:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'post'
    }]
});

module.exports = mongoose.model('user', userSchema);