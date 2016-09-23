var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();

app.use(cookieParser());

app.use(function(req, res, next){
	console.log(req.cookies.secure);
	res.cookie('secure', '1', {secure: true});  // 只有在https下才可以访问
	res.send('secure');
});

var https = require('https');
var fs = require('fs');

var options = {
  key: fs.readFileSync('./rsa/server.key'),
  cert: fs.readFileSync('./rsa/server.crt')
};

https.createServer(options, app).listen(4433);