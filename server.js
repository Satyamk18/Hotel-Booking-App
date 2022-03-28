var express = require('express');
var app = express();
var mongodb = require('mongodb');
var mongoose = require('mongoose');

const uri = "mongodb+srv://Satyam:DCNOLLfV3EDd5FdF@cluster0.5mge9.mongodb.net/HotelManagementApp?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true }) 
.then(() => console.log("MongoDB connected")) 
.catch((err) => console.log(err));

app.listen(5000,()=>{
   console.log("Server Started !");
})