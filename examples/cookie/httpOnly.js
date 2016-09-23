var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();

app.use(cookieParser());

app.use(function(req, res, next){
	console.log(req.cookies.nick);
	res.cookie('nick', 'casper', {httpOnly: true});  // 服务端可读取，但浏览器下不行（通过js）
	res.send('hello');
});

app.listen(3000);