var express = require('express');
var app = express();

app.use('/user/:uid', function(req, res, next){
	res.send('user: ' + req.params.uid);
});

app.listen(3000);