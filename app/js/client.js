'use strict';

var React = require('react');
var $ = require('jquery');

$('#app').append('<p>Hello from javascript!</p>');

var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        Hello, world, I am a CommentBox.
      </div>
    );
  }
});
React.render(
  <CommentBox />,
  document.getElementById('content')
);
