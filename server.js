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
 
app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
