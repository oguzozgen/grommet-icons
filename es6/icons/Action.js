var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import Icon from '../Icon';

var Action = function Action(props) {
  return React.createElement(
    Icon,
    _extends({ a11yTitle: 'Action' }, props),
    React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement(
        'g',
        { stroke: '#000000', strokeWidth: '2' },
        React.createElement('path', { d: 'M1,23 L4,20 L1,23 Z M20,4 L23,1 L20,4 Z M9,11 L12,8 L9,11 Z M13,15 L16,12 L13,15 Z M10,5 L19,14 L20,13 C22,11 24.0533047,8.00000006 20,4 C15.9466953,-5.91784286e-08 13,2 11,4 L10,5 Z M4,11 L5,10 L14,19 L13,20 C11.0000005,22 7.9999999,24.0873857 4,20 C9.84858655e-08,15.9126143 2,13 4,11 Z' })
      )
    )
  );
};

export default Action;