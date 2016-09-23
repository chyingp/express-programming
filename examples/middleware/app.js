var express = require('express');
var app = express();

app.use(function(req, res, next){
	console.log('收到请求，地址为：' + req.url);
	next();
});

app.use('/user', function(req, res, next){
	console.log('收到请求，时间为：' + new Date());
	next();
});

app.use('/user', function(req, res, next){
	res.send('user');
});

app.listen(3000);