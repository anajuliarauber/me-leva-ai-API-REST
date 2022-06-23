const mongoose = require("mongoose");
const express = require("express");
const requireDir = require("require-dir");
require('./models');
const indexRoutes = require("./routers/indexRoutes");
require("dotenv").config();
const cors = require("cors");

const app = express();

app.use(
    express.urlencoded({extended: true
    })
)
app.use(express.json())
app.use('/api', indexRoutes);
app.use(cors());


const mongoPassword = process.env.PASSWORD_MONGODB;
const mongoUser = process.env.USER_MONGODB;

const mongodbURI = `mongodb+srv://${mongoUser}:${mongoPassword}@api-cluster.dtwdw90.mongodb.net/?retryWrites=true&w=majority`;

app.get("/", (req, res) => {
    res.json({message: "OI"})
})


mongoose.connect(mongodbURI)
.then(() => {
    console.log("Conectado ao mongo")
    app.listen(3001);
})
.catch((err) => console.log(err))






