const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Tour_and_Travel").then(()=>{
    console.log("connected successfully");
}).catch((e)=>{
    console.log("error");
})