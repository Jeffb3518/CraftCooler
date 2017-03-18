var express = require("express");
var passport = require("../config/passport");

// Import the model to use its database functions.
var db = require("../models");

// Create all our routes and set up logic within those routes where required.
module.exports = function(app) {

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

// Route for signing up a user

app.post("/api/signup", function(req, res) {
    console.log(req.body.first);
    db.User.create({
      first: req.body.first,
      last: req.body.last,
      email: req.body.email,
      password: req.body.password
}).then(function() {
      // res.redirect("/public/login");
    }).catch(function(err) {
      // console.log(err);
      // // res.redirect("/api/profile");
      // res.json(err);
    });
  });
// route for logging in

app.post("/api/login", passport.authenticate("local"), function(req, res) {
  res.json("/profile");
 });

 // route to log out

 // Route for logging user out
  // app.get("/logout", function(req, res) {
  //   req.logout();
  //   res.redirect("/login");
  // });
};