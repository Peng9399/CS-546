const express = require("express");
const app = express();
const routes = require("./routes");

routes(app);

app.listen(3000, () => {
    console.log("Creating Server");
    console.log("Your routes will be running on http://localhost:3000");
})