// * Requires
const express = require("express");
const exphbs = require("express-handlebars");
const routes = require("./app/controllers/bio");
const path = require("path");
// var db = require("./app/models/")

/* ----------------------------------------------
 * SET UP App
 * ---------------------------------------------- */
var PORT = process.env.PORT || 8080;

// * App creation
var app = express();

// * Serving public files
app.use(express.static(  path.join(__dirname, '/app/public') ));

// * App parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// * Adding routes
routes(app);

/* ----------------------------------------------
 * SET UP Handlebars
 * ---------------------------------------------- */
// * Adding handlebars to the app
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set('views', path.join(__dirname, '/app/views'));
app.set("view engine", "handlebars");

/* ----------------------------------------------
 * START Server
 * ---------------------------------------------- */

app.listen(PORT, function() {
      console.log("App now listening at http://localhost:" + PORT);
    });

// db.sequelize.sync({ force: true }).then(function() {
//   app.listen(PORT, function() {
//     console.log("App now listening at http://localhost:" + PORT);
//   });
// });
