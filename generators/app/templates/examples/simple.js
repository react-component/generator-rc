/** @jsx React.DOM */
// use jsx to render html, do not modify simple.html
require('rc-<%= appname%>/assets/index.css');
var Component = require('rc-<%= appname%>');
var React = require('react');
React.render(<Component/>, document.getElementById('__react-content'));
