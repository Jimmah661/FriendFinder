// Initialise the Express server and create the Routing meathod
var express = require('express');
var router = express.Router();
var path = require('path');

// Call the data from the friends.js file
var friends = require(path.join(__dirname, "../data/friends.js"));

// Get function to pull the information out of the Friends variable
router.get("/friends", function (req, res) {
    res.json(friends)
});

// Post function to update the friends variable, needs to be called from the survey page
router.post('/friends', function (req, res) {
    // console.log(req.body)
    friends.push(req.body)
    // res.redirect('/')
})

// Export the module for use in the server
module.exports = router;