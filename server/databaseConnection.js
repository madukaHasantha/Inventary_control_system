
const mysql = require('mysql');

//database connection
const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"inventory_conroll_system",
    connectionLimit:10
});


module.exports = db;