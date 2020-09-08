var fs = require('fs');
var http = require('http');
var path = require('path');
var express = require('express');

const port = process.env.PORT || 5000;

var app = express();

app.set('port', port);

http.createServer(app).listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});

app.use(function(req,res,next) {
    if (req.url == '/') {
        res.sendFile(__dirname + '/index.html');
    } else {
        next();
    }
});

app.use(function(req,res,next) {
    if (req.url == '/style.css') {
        res.sendFile(__dirname + '/style.css');
    } else {
        next();
    }
});

app.use(function(req,res,next) {
    if (req.url == '/limits.js') {
        res.sendFile(__dirname + '/limits.js');
    } else {
        next();
    }
});

app.use(function(req,res,next) {
    if (req.url == '/script.js') {
        res.sendFile(__dirname + '/script.js');
    } else {
        next();
    }
});

app.use(function(req,res,next) {
    if (req.url == '/dice.png') {
        res.sendFile(__dirname + '/dice.png');
    } else {
        next();
    }
});