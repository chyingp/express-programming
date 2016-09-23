// 扩展性强
var express = require('express');
var morgan = require('morgan');
var compression = require('compression');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var app = express();

// 静态文件支持
app.use(express.static(path.join(__dirname, 'public')));

// 模板支持
app.set('views', 'views/');
app.set('view engine', 'ejs');

// 添加日志
app.use(morgan('combined'));

// 文件压缩
app.use(compression());

app.use(function(req, res, next){
	res.send('大家好，我是程序猿小卡');
});

app.listen(3000);