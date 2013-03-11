var connect = require('connect'), http = require('http'), app;

app = connect()
.use(connect.static('app'))
.use('/js/lib/', connect.static('node_modules/requirejs'))
.use('/node_modules', connect.static('node_modules'))
//test를 위해 추가
.use('/test', connect.static('test/'))
.use('/test', connect.static('app'))

http.createServer(app).listen(8082, function(){
	console.log('Running on http://localhost:8082');
})