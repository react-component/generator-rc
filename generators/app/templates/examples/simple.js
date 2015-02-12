// use jsx to render html, do not modify simple.html
require('<%= appname%>/assets/index.css');
var Component = require('<%= appname%>');
var React = require('react');
React.render(<Component/>, document.getElementById('__react-content'));
