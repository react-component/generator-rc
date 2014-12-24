# rc-<%= appname %>@<%= version %>

````js
if(window.seajs){
    window.require = window.seajs.use;
}
</script>
````

````html
<div id='ex1'>
</div>
````

````js
/** @jsx React.DOM */
require(['../','react'], function(<%= appname%>, React){
 // TODO with <%= appname%>
 var c = <<%= appname%>></<%= appname%>>;
 React.render(c, document.getElementById('ex1'));
});
````