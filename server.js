'use strict'

// require express and bodyParser
const  express = require("express");
const  bodyParser = require("body-parser");


// Import DB Connection
require("./config/db");
const  app = express();

app.use(bodyParser.json());


// Import API route
var routes = require('./api/routes/todoRoutes'); //importing route
routes(app);


// create express app
// define port to run express app
const  port =  3000;

// use bodyParser middleware on express app

// Add endpoint
app.get('/', (req, res) => {
res.send("Hello World");
});

// Listen to server
app.listen(port, () => {

console.log(`Server running at http://localhost:${port}`);
});