// 创建方式 2
var express = require('express');
var http = require('http');
var app = express();

var server = http.createServer(app);

server.listen(3000);