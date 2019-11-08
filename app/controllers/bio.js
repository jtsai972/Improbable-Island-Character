// var db = require("./../models");
var dk01 = require("../models/dk001")

module.exports = function(app) {
  // * HANDLING GET REQUEST: return all burgers in the db
  app.get("/", function(req, res) {
    res.render("index", {title: "Home", dk: [dk01]});
  });

  app.get("/dk-01", function(req, res) {
    res.render("biography", {title: "Home", dks: 1, dk: [dk01]})
  })
  
  // // * HANDLING POST REQUEST: 
  // app.post("/api/burgers", function(req, res) {
  //   db.Burger
  //     .create({burger_name: req.body.name})
  //     .then( function(result) {
  //       res.json({ id: result.insertId })
  //     })
  // });
  
  // // * HANDLING PUT REQUEST:
  // app.put("/api/burgers/:id", function(req, res) {
  //   db.Burger
  //     .update(
  //       req.body, 
  //       req.params.id, 
  //       function(result) {
  //         return result.changedRows === 0 ? 
  //           res.status(404).end() : 
  //           res.status(200).end();
  //       })
  // });
  
  // // * HANDLING DELETE REQUEST:
  // app.delete("/api/burgers/:id", function(req, res) {
  //   burger.delete(req.params.id, function(result) {
  //     return result.changedRows === 0 ? 
  //         res.status(404).end() : 
  //         res.status(200).end();
  //   })
  // });
}
