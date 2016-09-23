var express = require('express');
var app = express();

app.get('/user', function(req, res, next){
	console.log('1');
	next();
}, function(req, res, next){
	console.log('2');
	res.send('user');
});

app.listen(3000);