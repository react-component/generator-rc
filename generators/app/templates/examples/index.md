# rc-<%= appname %>@<%= version %>

````html
<div id='ex1'>
</div>
````

````js
/** @jsx React.DOM */
var <%= appname%> = require('../');
var React = require('react');
var c = <<%= appname%>></<%= appname%>>;
React.render(c, document.getElementById('ex1'));
````