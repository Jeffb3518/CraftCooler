// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var sequelize = require("sequelize");
// var passport = require("./config/passport");


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

//express session for authentication

var session = require('express-session');
app.use(session({
    secret: 'no secret',
    resave: true,
    saveUninitialized: true
}));

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/json" }));

// Static directory
app.use(express.static("./public"));

// Routes =============================================================

//NEED TO BE EDITED
require("./routes/html-routes.js")(app);
require("./routes/user-api-routes.js")(app);
require("./routes/api-route.js")(app);

// Syncing our sequelize models and then starting our express app
db.sequelize.sync({}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});