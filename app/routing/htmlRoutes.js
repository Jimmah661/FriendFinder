// Initialise the Express server and create the Routing meathod
var express = require('express');
var router = express.Router();
// For the path.join method I need to import the Path module
var path = require("path");


// Routing requests for the HTML files
router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home"))
})

router.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey"))
});

// Export the module for use in the server
module.exports = router;