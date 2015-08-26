// use jsx to render html, do not modify simple.html

import '<%= packageName%>/assets/index.less';
import <%= AppName%> from '<%= packageName%>';
import React from 'react';
React.render(<<%= AppName%> />, document.getElementById('__react-content'));
