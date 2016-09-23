var express = require('express');

var app = express();

app.use(function(req, res, next){
	res.send(req.get('host'));
});

app.listen(3000, 'www.fuckyou.com', function(){
	console.log('start listening');
});