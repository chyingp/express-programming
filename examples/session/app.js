var express = require('express');
var app = express();
var session = require('express-session');
var FileStore = require('session-file-store')(session);
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

app.set('views', 'views/');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(session({
	name: 'skey',
	secret: 'session demo',
	store: new FileStore(),
	saveUninitialized: false,  // 是否自动保存未初始化的会话
	resave: false,
	cookie: {
		maxAge: 24 * 60 * 60 * 1000  // 有效期是60000毫秒	
	}
}));

app.get('/', function(req, res, next){
	var sess = req.session;
	var isLogined = false;
	
	console.log( JSON.stringify(sess) );
	console.log( 'session id: ' + req.sessionID);
	// console.log( 'cookie: ' + sess.cookie.skey );
	
	if(req.cookies.skey){
		isLogined = true;
	}

	res.render('index', {
		isLogined: isLogined,
		name: sess.name
	});
});

app.post('/login', function(req, res, next){
	var name = 'chyingp';
	var password = '123456';
	var sess = req.session;

	if(req.body.name == name && req.body.password == password){
		req.session.regenerate(function(err) {
			if(err){
				res.json({ret_code: 2});
				return;
			}
			res.json({ret_code: 0});
		});
	}else{
		res.json({ret_code: 1});
	}
});

app.get('/logout', function(req, res, next){
	req.session.destroy(function(err) {
		if(err){
			res.json({ret_code: 2});
			return;
		}
		
		// res.json({ret_code: 0});
		res.redirect('/');
	});
});

app.listen(3000);