var express = require('express');
var app = express();

// 模板支持
app.set('views', 'views/');
app.set('view engine', 'ejs');

// 添加日志
app.use(morgan('combined'));

app.get('/', function(req, res, next){
	res.send('大家好，我是程序猿小卡');
});

app.listen(3000);