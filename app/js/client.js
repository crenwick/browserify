'use strict';

var $ = require('jquery');
var sweetAlert = require('sweetalert')();

$('#app').append('<p>Hello from javascript!</p>');
$('#button').click(function() {
  sweetAlert('Hello from this alert!');
});
