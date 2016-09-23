var express = require('express');
var app = express();

// 路由：字符串类型
app.get('/book', function(req, res, next){
	res.send('book');
});

// 路由：字符串模式
app.get('/user/*man', function(req, res, next){
	res.send('user');  // 比如： /user/man, /user/woman
});

// 路由：正则表达式
app.get(/animals?$/, function(req, res, next){
	res.send('animal');  // 比如： /animal, /animals
});

// 路由：命名参数
app.get('/employee/:uid/:age', function(req, res, next){
	res.json(req.params);  // 比如：/111/30，返回 {"uid": 111, "age": 30}
});

app.listen(3000);