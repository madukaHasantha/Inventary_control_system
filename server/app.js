const express = require('express');
const mysql = require('mysql');
var bodyParser = require('body-parser');
const cors = require("cors");

const databaseConnection = require("./databaseConnection");

// Create connection 
databaseConnection.connect((err) => {
    if (err) {
        return console.log(err);
    }
    return console.log("MySQL server connected successfully!");
})

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configure CORS middleware(front-end)
const corsOptions = {
    origin: 'http://localhost:3000', // Replace with your React app's URL
    credentials: true, // Enable credentials (cookies, authorization headers, etc.)
    optionsSuccessStatus: 204, // Some legacy browsers choke on a 204
}

app.use(cors(corsOptions));

require("./index")(app)

app.listen('4000', () => {
    console.log('Server started on port 4000');
});

app.get("/", (req, res, next) => {
    res.json({ "message": "ok!" });
});
