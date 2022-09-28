const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require('path');
const static_path = path.join(__dirname, "../public");

app.use(express.static(static_path))
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect("mongodb://localhost:27017/Tour_and_Travel");

const dataSchema = {

    trip_type_selector :String,
    from_airport_code :String,
    to_airport_code :String,
    dep_date: String,
    ret_date : String
}

const Data = mongoose.model("Data",dataSchema);

app.get("/",function(req,res){
    res.sendFile(__dirname + "./Index.html");

})

app.post("/data", async(req,res)=>{
    let newData = new Data({
        trip_type_selector : req.body.trip_type_selector,
        from_airport_code  : req.body.from_airport_code,
        to_airport_code    : req.body.to_airport_code,
        dep_date           : req.body.dep_date,
        ret_date           : req.body.ret_date
    });
    await newData.save();
    res.redirect('/')
    // res.status(200).send("The data was posted")
})

app.listen(3000,function(){
    console.log("server is running on 3000");
})