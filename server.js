// Call the Express and Path modules for use in the server
var express = require('express');
var path = require('path');

// Requiring the routing scripts
var api = require("./app/routing/apiRoutes")
var html = require('./app/routing/htmlRoutes')

// Initialise the Express Server and assign port
var app = express();
var PORT = process.env.PORT || 8000;

// set up the middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'app/public')))

// Routing Declarations (See apiRouting and htmlRouting)
app.use('/api', api);
app.use('/', html);

// Start the listener
app.listen(PORT, function () {
    console.log("Server active on http://localhost:" + PORT)
})