var express = require('express');
var app = express();
var user = express.Router();

// 应用级
app.use(function(req, res, next){
	console.log('收到请求，地址为：' + req.url);
	next();
});

// 应用级
app.get('/profile', function(req, res, next){
	res.send('profile');
});

// 路由级
user.use('/list', function(req, res, next){
	res.send('/user/list');
});

// 路由级
user.get('/detail', function(req, res, next){
	res.send('/user/detail');
});

app.use('/user', user);

app.listen(3000);