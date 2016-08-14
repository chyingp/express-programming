var express = require('express');
var app = express();

app.set('views', 'views/');  // 模板所在路径
app.set('view engine', 'ejs');  // 模板引擎

app.use('/', function(req, res, next){
	res.render('index', {
		title: 'ejs template'
	});
});

app.listen(3000);