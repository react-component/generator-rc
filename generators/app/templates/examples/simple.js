/** @jsx React.DOM */
// use jsx to render html, do not modify simple.html
require('rc-<%= appname%>/assets/index.css');
var <%= AppName%> = require('rc-<%= appname%>');
var React = require('react');
React.render(<<%= AppName%> />, document.getElementById('__react-content'));
