var db = require("../models");
 
 // Routes
 module.exports = function(app) {
 
  // GET route for getting all of the posts
   app.get("/api/users", function(req, res) {
db.User.findAll({}).then (function(users) {
res.json(users)
      }); 
   });
 
  // Get rotue for retrieving a single post
   app.get("/api/users/:id", function(req, res) {
     db.User.findOne({
       where: {
         id: req.params.id
      }
     }).then(function(dbUser) {
      console.log(dbUser);
       res.json(dbUser);
     });
   });
 
   // POST route for saving a new post
  app.post("/api/users", function(req, res) {
    console.log("yea")
    db.User.create(req.body).then(function(dbUser) {
      res.json("true"); 
    });
  });

   // DELETE route for deleting posts
   app.delete("/api/users/:id", function(req, res) {
     db.User.destroy({
       where: {
         id: req.params.id
       }
     }).then(function(dbUser) {
       res.json(dbUser);
     });
  });
 
  // PUT route for updating posts
   app.put("/api/users", function(req, res) {
     db.User.update(
       req.body,
       {
         where: {
           id: req.body.id
        }
       }).then(function(dbUser) {
        res.json(dbUser);
       });
   });
 };