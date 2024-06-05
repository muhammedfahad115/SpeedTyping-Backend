const express = require("express");
const app = express();
const UserRoutes = require('./Routes/UserRoutes')
require('dotenv').config()
require('./Config/Config')()

app.use('/',UserRoutes);

app.listen(3000, () => {
    console.log("Listening on port 3000");
    });