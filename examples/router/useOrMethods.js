var express = require('express');
var app = express();

var User = express.Router();

User.get('/list', function(req, res, next) {
	res.send('user list: get');
});

app.use('/user', User);

app.listen(3000);