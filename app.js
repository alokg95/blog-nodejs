var express = require('express');
var path = require('path');
var http = require('http');


var app = express();

// view engine setup
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.all('*', function(request, response){
  response.render('index', {msg: 'Welcome to the Practical Node.js!'});
});

var server = http.createServer(app);

var boot = function(){ 
  server.listen(app.get('port'), function(){
    console.info('Express server listening on port ' + app.get('port'));
  });
}

var shutdown = function(){
  server.close();
}

if(require.main === module){
  boot();
}
else{
  console.info('Running app as a module');
  exports.boot = boot; 
  exports.shutdown = shutdown; 
  exports.port = app.get('port');

}

