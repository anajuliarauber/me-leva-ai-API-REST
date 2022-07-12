const mongoose = require("mongoose");
const requireDir = require("require-dir");
require('./models');
require("dotenv").config({
    path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
});
const app = require("./app")


const mongoPassword = process.env.PASSWORD_MONGODB;
const mongoUser = process.env.USER_MONGODB;

const mongodbURI = `mongodb+srv://${mongoUser}:${mongoPassword}@api-cluster.dtwdw90.mongodb.net/?retryWrites=true&w=majority`;
const port = process.env.PORT;

mongoose.connect(mongodbURI)
.then(() => {
    console.log("Conectado ao mongo")
    app.listen(port);
})
.catch((err) => console.log(err))






