/*jslint node: true */
'use strict';

var express = require("express");
var path = require("path");

var app = express();

//configure env variables
var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'


//configure express
app.set('view engine', 'ejs');

//set up initial routing
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/app/index.html'));
});

//start the server
server.listen(server_port, server_ip_address, function(){
  console.log("Listening on " + server_ip_address + ", server_port " + server_port)
});


module.exports = app;