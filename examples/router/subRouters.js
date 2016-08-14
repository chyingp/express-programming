var express = require('express');
var app = express();
var user = express.Router();

user.use('/list', function(req, res, next){
	res.send('/list');
});

user.use('/detail', function(req, res, next){
	res.send('/detail');
});

app.listen(3000);