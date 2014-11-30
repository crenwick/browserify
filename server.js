'use strict';

var express = require('express');
var app = express();
var count = 0;

app.get('/count', function(req, res) {
  count++;
  res.json({count: count});
});

app.use(express.static(__dirname + '/build'));

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function() {
  console.log('server on port', app.get('port'));
});
