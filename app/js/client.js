
'use strict';

var $ = require('jquery');
require('sweetalert');

$('#app').append('<p>Hello from javascript!</p>');
$('#button').click(function() {
  sweetAlert({
    title: 'Nice!',
    text: 'Heres my message!',
    confirmButtonText: 'Cool' });
});
