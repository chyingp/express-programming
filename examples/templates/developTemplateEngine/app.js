var fs = require('fs'); // this engine requires the fs module
app.engine('ntl', function (filePath, options, callback) { // define the template engine
  fs.readFile(filePath, function (err, content) {
    if (err) return callback(new Error(err));
    // this is an extremely simple template engine
    var rendered = content.toString().replace('#title#', '<title>'+ options.title +'</title>')
    .replace('#message#', '<h1>'+ options.message +'</h1>');
    return callback(null, rendered);
  });
});
app.set('views', './views'); // specify the views directory
app.set('view engine', 'ntl'); // register the template engine

// filepath: 模板文件的路径
// options：渲染模板所用的参数
// callback：渲染完成回调
app.engine(engineExt, function(filepath, options, callback){

	// 参数一：渲染过程的错误，如成功，则为null
	// 参数二：渲染出来的字符串
	return callback(null, 'Hello World');
});