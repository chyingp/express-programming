var express = require('express');
var app = express();

app.use(function(req, res, next) {
	console.log('1');
	next();
});

app.use(function(req, res, next) {
	console.log('2');
	next();
});

app.use(function(req, res, next) {
	console.log('3');
	res.send('hello');
});

app.listen(3000);