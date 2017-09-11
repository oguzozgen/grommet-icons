var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import Icon from '../Icon';

var LinkNext = function LinkNext(props) {
  return React.createElement(
    Icon,
    _extends({ a11yTitle: 'LinkNext' }, props),
    React.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M2,12 L22,12 M13,3 L22,12 L13,21' })
  );
};

export default LinkNext;