var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import Icon from '../Icon';

var HpeLabsInsignia = function HpeLabsInsignia(props) {
  return React.createElement(
    Icon,
    _extends({ a11yTitle: 'HpeLabsInsignia' }, props),
    React.createElement('polyline', { fill: 'none', stroke: '#01A982', strokeWidth: '4', points: '20 46 2 46 2 2 26 2 26 30 18 30 18 10 10 10 10 38 34 38' })
  );
};

export default HpeLabsInsignia;