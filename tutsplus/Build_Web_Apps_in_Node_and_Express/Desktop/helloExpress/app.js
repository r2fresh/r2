
/**
 * Module dependencies.
 */

var express = require('express')
  , http = require('http')


var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
});

app.get("/", function(req, res){
  res.send("Hello, Express!")
});

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
