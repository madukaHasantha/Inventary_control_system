const express = require('express');
const mysql = require('mysql');
var bodyParser = require('body-parser');

const databaseConnection = require("./databaseConnection");

//create connection 
databaseConnection.connect((err) =>{
    if(err){
        return console.log(err);
    }
    return console.log("mysql sever connected succussfully!");
})

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

require("./index")(app)

app.listen('4000', () =>{
    console.log('server started on port 4000');
    
});

app.get("/",(req,res,next)=>{
    res.json({"message":"ok!"});

});