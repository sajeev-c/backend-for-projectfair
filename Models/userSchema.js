// import mongoose to connect node & mongodb
const mongoose = require('mongoose')

// schema creation
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,   // to store data
    },
    email:{
        type:String,
        required:true,
        unique:true,   // to check data
    },
    password:{
        type:String,
        required:true,
    },
    github:{
        type:String,
    },
    link:{
        type:String,
    },
    profile:{
        type:String,
    }
})

// modal creation - users (mongodb - collection)
const users = mongoose.model("users",userSchema)

module.exports=users