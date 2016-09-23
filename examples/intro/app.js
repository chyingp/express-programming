var express = require('express');
var app = express();
var morgan = require('morgan')

// 模板引擎
app.set('views', 'views/');
app.set('view engine', 'ejs');

// 日志
app.use(morgan('combined'));

// 中间件
app.use(function(req, res, next){
	next();
});

// 路由
app.get('/list', function(req, res, next){
	res.render('list', {title: 'list'});
});

app.listen(3000);