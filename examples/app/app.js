
var express = require('express');

var app = express();

app.use(function(req, res, next) {
	res.send('hello');
});

app.listen(3000, function(){
	console.log('start listening');
});