# generator-rc

yeoman generator for react component for node 4.0.0

see also https://github.com/react-component/rc-tools

## Feature

* support pre-commit
* support eslint
* support karma
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

### file structure

```
- .travis.yml
- examples
 - index.html
 - index.js
- src
 - Component.js
 - index.js
- index.js
- tests
  - index.js
  - detail.spec.js
- package.json
```

#### examples/index.js

```js
import ReactDOM from 'react-dom';
import React from 'react';
import Component from 'rc-test';
ReactDOM.render(<Component />, document.getElementById('__react-content'));
```

#### src/Component.js

```js
import React from 'react';
const Component = React.createClass({
    // TODO
    render: function(){
        return <div></div>;
    };
});
export default Component;
```

#### .travis.yml

#### package.json

#### detail.spec.js

```js
import expect from 'expect.js';
import React from 'react';
import Component from 'rc-test';

describe('it', function(){
    it('works', function(){
        const component = (<Component/><a></a></Component>);
        expect(component).to.be(component);
    });
});
```

#### index.html

```
placeholder
```

### start server

```
npm install
npm start
```

* run `npm run chrome-test` to see test
* open [http://localhost:8000/examples/](http://localhost:8000/examples/) to see demo