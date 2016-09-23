// 原生http模块
var http = require('http');

var server = http.createServer(function(req, res){
	res.writeHead(200, {
		'Content-Type': 'text/html; charset=utf-8'
	});
	res.end('大家好，我是程序猿小卡');
});

server.listen(3000);