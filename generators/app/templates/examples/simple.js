// use jsx to render html, do not modify simple.html
'use strict';

import '<%= packageName%>/assets/index.css';
import <%= AppName%> from '<%= packageName%>';
import React from 'react';
React.render(<<%= AppName%> />, document.getElementById('__react-content'));
