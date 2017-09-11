var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import Icon from '../Icon';

var Down = function Down(props) {
  return React.createElement(
    Icon,
    _extends({ a11yTitle: 'Down' }, props),
    React.createElement('polyline', { fill: 'none', stroke: '#000', strokeWidth: '2', points: '7.086 3.174 17.086 13.174 7.086 23.174', transform: 'scale(1 -1) rotate(-89 -1.32 0)' })
  );
};

export default Down;