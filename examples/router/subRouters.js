var express = require('express');
var app = express();

var user = express.Router();

user.get('/list', function(req, res, next){
	res.send('/list');
});

user.get('/detail', function(req, res, next){
	res.send('/detail');
});

app.use('/user', user); // mini app，通常做应用拆分

app.listen(3000);

// var express = require('express');
// var app = express();

// app.get('/user/list', function(req, res, next){
// 	res.send('/list');
// });

// app.get('/user/detail', function(req, res, next){
// 	res.send('/detail');
// });

// app.listen(3000);