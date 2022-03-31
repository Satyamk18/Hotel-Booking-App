const express = require('express');
const router = express.Router();
const Room = require('../models/room');

router.get('/getallrooms',(req,res)=>{
    Room.find({})
    .then((rooms)=>{
        res.statusCode = 200;
        res.json(rooms);
    })
    .catch((err)=>{
        console.log(err);
    })
})

module.exports = router;
