var express = require('express');
var app = express();

app.use(function(req, res, next){
	next(new Error('出错啦'));
});

// 前面没有路由匹配的时候，会到这里；
app.use(function(req, res, next){
	res.status(404);
	res.send('nothing found');
});

app.use(function(err, req, res, next){
	res.status(err.status || '500');
	res.send(err.message);
});

app.listen(3000);