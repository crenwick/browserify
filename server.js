'use strict';

var express = require('express');
var app = require();

app.use(express.static(__dirname + '/build'));

app.listen(3000);
