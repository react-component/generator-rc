# <%= packageName%>
---

React <%= AppName%> Component

<% if(!tnpm) { %>
[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![gemnasium deps][gemnasium-image]][gemnasium-url]
[![npm download][download-image]][download-url]

[npm-image]: http://img.shields.io/npm/v/<%= packageName%>.svg?style=flat-square
[npm-url]: http://npmjs.org/package/<%= packageName%>
[travis-image]: https://img.shields.io/travis/react-component/<%= appname%>.svg?style=flat-square
[travis-url]: https://travis-ci.org/react-component/<%= appname%>
[coveralls-image]: https://img.shields.io/coveralls/react-component/<%= appname%>.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/react-component/<%= appname%>?branch=master
[gemnasium-image]: http://img.shields.io/gemnasium/react-component/<%= appname%>.svg?style=flat-square
[gemnasium-url]: https://gemnasium.com/react-component/<%= appname%>
[node-image]: https://img.shields.io/badge/node.js-%3E=_0.10-green.svg?style=flat-square
[node-url]: http://nodejs.org/download/
[download-image]: https://img.shields.io/npm/dm/<%= packageName%>.svg?style=flat-square
[download-url]: https://npmjs.org/package/<%= packageName%>
<% } %>

## Screenshots

<img src="" width="288"/>


## Development

```
npm install
npm start
```

## Example

http://localhost:<%= port%>/examples/

<%if(!tnpm) {%>
online example: http://react-component.github.io/<%= appname%>/
<%}%>

## install

<%if(tnpm) {%>
```
tnpm install <%= packageName%>
```
<%} else {%>
[![<%= packageName%>](https://nodei.co/npm/<%= packageName%>.png)](https://npmjs.org/package/<%= packageName%>)
<% } %>

## Usage

```js
var <%= AppName%> = require('<%= packageName%>');
var React = require('react');
React.render(<<%= AppName%> />, container);
```

## API

### props

<table class="table table-bordered table-striped">
    <thead>
    <tr>
        <th style="width: 100px;">name</th>
        <th style="width: 50px;">type</th>
        <th style="width: 50px;">default</th>
        <th>description</th>
    </tr>
    </thead>
    <tbody>
        <tr>
          <td>className</td>
          <td>String</td>
          <td></td>
          <td>additional css class of root dom node</td>
        </tr>
    </tbody>
</table>


## Test Case

```
npm test
npm run chrome-test
```

## Coverage

```
npm run coverage
```

open coverage/ dir

## License

<%= packageName%> is released under the MIT license.
