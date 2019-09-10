// Initialise the Express server and create the Routing meathod
var express = require('express');
var router = express.Router();

// Call the data from the friends.js file
var friends = require("../data/friends")

router.get("", function (req, res) {
    res.json(friends)
})