var express = require('express');
var app = express();
var mongodb = require('mongodb');
var mongoose = require('mongoose');
const roomRoutes = require('./routes/roomRoutes');
const userRoutes = require('./routes/userRoutes');
const uri = "mongodb+srv://Satyam:DCNOLLfV3EDd5FdF@cluster0.5mge9.mongodb.net/HotelManagementApp?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true }) 
.then(() => console.log("MongoDB connected")) 
.catch((err) => console.log(err));

app.use(express.json());
app.use('/api/rooms' , roomRoutes);
app.use('/api/users' , userRoutes);

app.listen(5000,()=>{
   console.log("Server Started !");
})