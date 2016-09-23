var express = require('express');
var app = express();
app.listen(3000);

// 添加路由配置
app.get(path, fn);

// 步骤一：延迟加载，用于：
// 1、初始化 app._router 实例
// 2、内部加载 query、init 两个中间件
app.lazyRouter();

app._router = new Router();
app._router.use( middleware.query() );
app._router.use( middleware.init() );

// 步骤二：往 _router 添加路由配置
app._router.route(path).get(fn);

// 步骤三：_router 内部实现
var layer = new Layer({ path: path, fn: fn });
app._router.stack.push( layer );


// 创建 miniApp
// new Router() -> new express.Router()
var User = express.Router();  
User.get(path, fn);

// mount miniApp -> 路由拆分
app.use(path1, User);

// 步骤一：miniApp 添加路由
// 与之前步骤类似，略过

// 步骤二：将 miniApp mount 到 app 上
// 1. 当请求匹配中 paht1，就会 接着检查 miniApp 上的路由配置
// 2. miniApp 上有路由匹配中，执行相应的 中间件
User.mountpath = path1;
app._router.use(path1, User.handle);

// 步骤三：app._router.use 内部的大致细节
var layer = new Layer({ path: path, fn: fn1 });
app._router.stack.push( layer );
