var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();

app.use(cookieParser('secret'));

app.use(function(req, res, next){
	
	console.log(req.cookies.signed);  // 这里是undefined
	console.log(req.signedCookies.signed);  // 这里是 signed
	
	res.cookie('signed', 'signed', {signed: true});  // value 是加密过的
	
	res.send('signed');
});

app.listen(3000);