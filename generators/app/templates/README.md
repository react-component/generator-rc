# rc-<%= appname%>
---

<%= appname%> ui component for react

[![NPM version][npm-image]][npm-url]
[![SPM version](http://spmjs.io/badge/rc-<%= appname%>)](http://spmjs.io/package/rc-<%= appname%>)
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![gemnasium deps][gemnasium-image]][gemnasium-url]
[![node version][node-image]][node-url]
[![npm download][download-image]][download-url]
[![Sauce Test Status](https://saucelabs.com/buildstatus/rc-<%= appname%>)](https://saucelabs.com/u/rc-<%= appname%>)

[![Sauce Test Status](https://saucelabs.com/browser-matrix/rc-<%= appname%>.svg)](https://saucelabs.com/u/rc-<%= appname%>)

[npm-image]: http://img.shields.io/npm/v/rc-<%= appname%>.svg?style=flat-square
[npm-url]: http://npmjs.org/package/rc-<%= appname%>
[travis-image]: https://img.shields.io/travis/react-component/<%= appname%>.svg?style=flat-square
[travis-url]: https://travis-ci.org/react-component/<%= appname%>
[coveralls-image]: https://img.shields.io/coveralls/react-component/<%= appname%>.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/react-component/<%= appname%>?branch=master
[gemnasium-image]: http://img.shields.io/gemnasium/react-component/<%= appname%>.svg?style=flat-square
[gemnasium-url]: https://gemnasium.com/react-component/<%= appname%>
[node-image]: https://img.shields.io/badge/node.js-%3E=_0.10-green.svg?style=flat-square
[node-url]: http://nodejs.org/download/
[download-image]: https://img.shields.io/npm/dm/rc-<%= appname%>.svg?style=flat-square
[download-url]: https://npmjs.org/package/rc-<%= appname%>

## Screenshots

<img src="http://gtms02.alicdn.com/tps/i2/TB1luFKHXXXXXb3XXXXl4OqLpXX-574-596.png" width="288"/>


## Feature

* support ie8,ie8+,chrome,firefox,safari

### Keyboard



## install

[![rc-<%= appname%>](https://nodei.co/npm/rc-<%= appname%>.png)](https://npmjs.org/package/rc-<%= appname%>)

## Usage

```js
var Rc<%= appname%> = require('rc-<%= appname%>');
var React = require('react');
React.render(<Rc<%= appname%> />, container);

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

## Development

```
npm install
npm start
```

## Example

http://localhost:<%= port%>/examples/

online example: http://react-component.github.io/<%= appname%>/build/examples/

## Test Case

http://localhost:<%= port%>/tests/runner.html?coverage

## Coverage

http://localhost:<%= port%>/node_modules/rc-server/node_modules/node-jscover/lib/front-end/jscoverage.html?w=http://localhost:<%= port%>/tests/runner.html?coverage

## License

rc-<%= appname%> is released under the MIT license.
