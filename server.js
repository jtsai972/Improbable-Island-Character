// * Requires
const express = require("express");
const exphbs = require("express-handlebars");
const routes = require("./app/controllers/bio");
const path = require("path");
// var db = require("./app/models/")

/**
 * const hbs = exphbs.create({
    extname      :'hbs',
    layoutsDir   : 'path/to/layout/directory',
    defaultLayout: 'main',
    helpers      : 'path/to/helpers/directory',
    partialsDir  : [
        'path/to/partials/directory'
    ]
});
 */

/* ----------------------------------------------
 * SET UP App
 * ---------------------------------------------- */
var PORT = process.env.PORT || 8080;

// * App creation
var app = express();

var hbs = exphbs.create({ 
  /* config */ 
  extname      :'handlebars',
  layoutsDir   : './app/views/layouts',
  defaultLayout: 'main',
  //helpers      : 'path/to/helpers/directory',
  partialsDir  : [ './app/views/partials']
});

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
app.engine("handlebars", hbs.engine);
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
