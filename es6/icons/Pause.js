var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import Icon from '../Icon';

var Pause = function Pause(props) {
  return React.createElement(
    Icon,
    _extends({ a11yTitle: 'Pause' }, props),
    React.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M3,21 L9,21 L9,3 L3,3 L3,21 Z M15,21 L21,21 L21,3 L15,3 L15,21 Z' })
  );
};

export default Pause;