// express框架
var express = require('express');
var app = express();

app.use(function(req, res, next){
	res.send('大家好，我是程序猿小卡');
});

app.listen(3000);