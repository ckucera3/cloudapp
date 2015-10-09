/*jslint node: true */
'use strict';

var express = require("express");
var path = require("path");

var app = express();
var port = process.env.PORT || 8080;

//configure express
app.set('view engine', 'ejs');

//set up initial routing
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/app/index.html'));
});

//start the server
var server = app.listen(port, function () {
    console.log("listening on port " + port);
});



module.exports = app;