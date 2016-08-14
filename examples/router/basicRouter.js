var express = require('express');
var app = express();

app.use('/user', function(req, res, next){
	res.send('user');
});

app.listen(3000);