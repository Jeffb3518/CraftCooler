var express = require("express");
// var passport = require("../config/passport");

// Import the model to use its database functions.
var db = require("../models");

// Create all our routes and set up logic within those routes where required.
module.exports = function(app) {

// Requiring our custom middleware for checking if a user is logged in
// var isAuthenticated = require("../config/middleware/isAuthenticated");

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
      // res.redirect("/api/signup");
      // res.json(err);
    });
  });

 // Route for getting some data about our user on client side
  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    }
    else {
      // Otherwise send back the user's email and id
      res.json({
        email: req.user.email,
        password: req.user.password
      });
    }
  });

// route for logging in

// app.post("/api/login", function(req, res) {
//   console.log(req.body.email);
//   res.json({status: 200});
//  });

 app.get("/api/userInfo", function(req, res){
    db.User.findAll({})
      .then(function(data) {
        console.log(data);
        res.json(data);
    });
 });

 app.post("/api/login", function(req, res){
        db.User.findAll({}).then(function(data) {
          for (i = 0; i < data.length; i++){
            if (data[i].dataValues.email == req.body.email && data[i].dataValues.password == req.body.password){
              req.session.userInfo = {
                  email: req.body.email
              } 
              req.session.isAuth = true;
            } else {
              req.session.isAuth = false;
            }
          }

          if (req.session.isAuth == true){
            res.send({status: 'success'});
          } else if (req.session.isAuth == false){
            res.send({status: 'invalid'});
          }
        });
    });

  app.get('/isAuthenticated', function(req, res){
        if (req.session.isAuth == true){
            res.json(req.session.userInfo);
        } else {
            res.json('invalid');
        }
    });

  // db.User.findOne({
  //     where: {
  //       email: req.body.email
  //     }
  //   })

 //route to log out

//  Route for logging user out
//   app.get("/logout", function(req, res) {
//     req.logout();
//     res.redirect("/login");
  // });
};