
'use strict';

var $ = require('jquery');
require('sweetalert');

$('#app').append('<p>Hello from javascript!</p>');
$('#button').click(function() {
  $.getJSON('http://localhost:3000/count', function(data) {
    sweetAlert({
      title: 'Nice!',
      text: 'Current button count: ' + data.count,
      confirmButtonText: 'Cool' });
  });
});
