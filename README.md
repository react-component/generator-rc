# generator-rc

yeoman generator for react component for node 4.0.0

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

all parameters:

``
port defaults to 8000, 

author defaults to empty, 

rc_version defaults to 1.0.0,

tnpm defaults to false,

repo_url defaults to http://github.com/react-component,

pkg_name defaults to parent directory's name,
``
