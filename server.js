'use strict';

var express = require('express');
var app = express();
//var io = require('socket.io')(app);

app.use(express.static(__dirname + '/build'));

//io.on('connection', function(socket){
//  console.log('a user connect');
//});

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function() {
  console.log('server on port', app.get('port'));
});
