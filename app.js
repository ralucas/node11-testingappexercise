
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

var app = express();
var fs = require('fs');

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//app.get('/', routes.index);
app.get('/users', user.list);

app.get('/hi', function (req, res){
	res.send('<h1>Hello</h1>');
});

app.get('/success', function (req, res){
	res.send('<h1>SUCCESS!</h1>');
});

app.get('/', function (req, res){
	fs.readFile(__dirname + '/index.html', function (err, data){
		res.setHeader('Content-Type', 'text/html');
		res.send(data);
	});
});

app.post('/form', function (req, res){
	//res.redirect('/success');
	res.send({Email : req.body.email});
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
