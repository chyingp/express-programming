var express = require('express');
var app = express();
var http = require('http');

var server = http.createServer(app);

server.listen(3000, function(){
	console.log('start listening');
});