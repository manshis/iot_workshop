const express = require('express'),
    room = require('./room.controller'),
    app = express();

// Define all routes
app.get('/rooms', room.list);
app.get('/room', room.getRoom);
app.post('/room', room.updateRoom);

module.exports = app;