var express = require('express');
var app = express();
var ejs = require('ejs');

app.set('views', 'views/');  // 模板所在路径
app.engine('html', require('ejs').__express);

app.use('/', function(req, res, next){
	res.render('index.html', {
		title: 'ejs template width html ext'
	});
});

app.listen(3000);