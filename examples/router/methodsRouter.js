var express = require('express');
var app = express();

app.get('/user', function(req, res, next){
	res.send('user: get');
});

app.post('/user', function(req, res, next){
	res.send('user: post');
});


app.listen(3000);