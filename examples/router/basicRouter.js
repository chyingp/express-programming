var express = require('express');
var app = express();

app.use('/', function(req, res, next){
	console.log('here comes the request');
	next();
});

app.use('/user', function(req, res, next){
	res.send('user');
});

app.listen(3000);