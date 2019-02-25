/**
 * This file contains the server side code. It is the starting point for the
 * backend server.
 */
const express = require('express'),
  routes = require('./controllers/routes.js'),
  bodyParser = require('body-parser'),
  app = express();

  app.use(bodyParser.json());
// All api routes comming from front end will be defined and handled in routes.js
app.use('/api', routes);

// All regular routes use the Universal engine
app.get('*', (req, res) => {
  res.sendFile( __dirname + "/views/" + "index.html" );
});
 
var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    
    console.log("Server listening at http://localhost:8081/");
 })
