const express = require("express");
const app = express();                // this creates a server
const configRoutes = require("./routes");

configRoutes(app);

app.listen(3000, () => {                    //runs a server, this is an express application
  console.log("We've now got a server!");
  console.log("Your routes will be running on http://localhost:3000");
});
