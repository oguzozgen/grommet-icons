var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import Icon from '../Icon';

var Sync = function Sync(props) {
  return React.createElement(
    Icon,
    _extends({ a11yTitle: 'Sync' }, props),
    React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement(
        'g',
        { stroke: '#000000', strokeWidth: '2' },
        React.createElement('path', { d: 'M5,19 L16,19 C19.866,19 23,15.866 23,12 L23,9 M8,15 L4,19 L8,23 M19,5 L8,5 C4.134,5 1,8.134 1,12 L1,15 M16,1 L20,5 L16,9' })
      )
    )
  );
};

export default Sync;