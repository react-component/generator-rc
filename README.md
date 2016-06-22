# generator-rc

yeoman generator for react component for node 4.0.0

see also https://github.com/react-component/rc-tools

## Feature

* support typescript
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
 - index.tsx
- src
 - Component.tsx
 - index.tsx
- index.js
- tests
  - index.js
  - detail.spec.tsx
- package.json
```

#### examples/index.tsx

```js
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import Component from 'rc-test';
ReactDOM.render(<Component />, document.getElementById('__react-content'));
```

#### src/Component.tsx

```js
import * as React from 'react';
export default class Component extends React.Component<any, any> {
    // TODO
    render(){
        return <div></div>;
    }
}
```

#### .travis.yml

#### package.json

#### detail.spec.tsx

```js
import expect from 'expect.js';
import * as React from 'react';
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