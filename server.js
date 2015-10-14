/*jslint node: true */
'use strict';

var express = require("express");
var path = require("path");
var hbs = require("hbs");


var app = express();

//configure env variables
var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'


//configure express
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
app.set('views', __dirname + '/views');
app.use(express.static('./public'));



//set up initial routing
app.get('/', function (req, res) {
    res.render('index');
});

//get cloud data
var clouds = require('./public/javascripts/clouds.json');

app.get('/clouds', function (req, res) {
   res.render('clouds', clouds);
});

//start the server
app.listen(server_port, server_ip_address, function(){
  console.log("Listening on server_port " + server_port)
});


module.exports = app;