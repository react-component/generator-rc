# generator-rc

yeoman generator for react component

For details to see https://github.com/react-component/rc-server and https://github.com/react-component/rc-tools

## Feature

* support precommit-hook
* support jshint/jscs
* support gh-changelog
* support mocha-phantomjs
* support coveralls.io
* support travis-ci
* support saucelabs

## Usage

```
npm install yo generator-rc -g
mkdir test
cd test
yo rc --port=8000 --author=yiminghe@gmail.com --rc_version=1.0.0
```

``note: port defaults to 8000, author defaults to empty, rc_version defaults to 1.0.0``
