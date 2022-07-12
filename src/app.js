const express = require("express");
const indexRoutes = require("./routers/indexRoutes");
const cors = require("cors");

const app = express();

app.use(
    express.urlencoded({extended: true
    })
)
app.use(express.json())
app.use('/api', indexRoutes);
app.use(cors());

app.get("/", (req, res) => {
    res.json({message: "OI"})
})

module.exports = app;