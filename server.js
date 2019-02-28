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

const port = process.env.PORT || 80

app.listen(port, function() {
  console.log("Node app is running at localhost:" + port)
})
