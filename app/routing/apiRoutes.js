// Initialise the Express server and create the Routing meathod
var express = require('express');
var router = express.Router();
var path = require('path');

// Call the data from the friends.js file
var friends = require(path.join(__dirname, "../data/friends.js"));

router.get("/friends", function (req, res) {
    res.json(friends)
});

// Export the module for use in the server
module.exports = router;