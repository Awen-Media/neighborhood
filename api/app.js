const express = require("express");
const bodyParser = require("body-parser");
const port = (process.env.PORT !== undefined) ? process.env.PORT : 3000;
const app = express();

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to application." });
});

// set port, listen for requests
app.listen(port, () => {
  console.log("Server is running on port 3000.");
});
