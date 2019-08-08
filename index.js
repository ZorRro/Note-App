var express = require("express");
require('dotenv').config()
var cors = require("cors");
var path = require('path')
var bodyParser = require("body-parser");
var mongoose = require("mongoose");


const AuthRouter = require('./routes/auth.routes')

const app = express();
const PORT = (process.env.PORT || "3090");

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

const mongo_db = mongoose
    .connect(
        process.env.MONGO_URI, { useNewUrlParser: true }
    )
    .then(result => {
        console.log("connected to mongoDB.");
    })
    .catch(err => {
        console.log("Error Occurred while connecting to MongoDB.");
        console.log("Error :: " + err);
    });


app.use('/auth', AuthRouter)


app.use("*", (req, res) => {
    res.sendFile(express.static(path.join(__dirname, 'public/index.html')));
});


app.listen(PORT, (req, res) => {
    console.log("server is listening on port " + PORT);
    // console.log(
    //     process.env.SECRET,
    //     process.env.MONGO_URI,
    //     process.env.DB
    // )
});