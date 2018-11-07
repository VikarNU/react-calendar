'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _mergeClassNames = require('merge-class-names');

var _mergeClassNames2 = _interopRequireDefault(_mergeClassNames);

var _propTypes3 = require('./shared/propTypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tile = function Tile(_ref) {
  var activeStartDate = _ref.activeStartDate,
      children = _ref.children,
      Component = _ref.component,
      classes = _ref.classes,
      date = _ref.date,
      dateTime = _ref.dateTime,
      maxDate = _ref.maxDate,
      maxDateTransform = _ref.maxDateTransform,
      minDate = _ref.minDate,
      minDateTransform = _ref.minDateTransform,
      onClick = _ref.onClick,
      onMouseOver = _ref.onMouseOver,
      style = _ref.style,
      tileClassName = _ref.tileClassName,
      tileContent = _ref.tileContent,
      tileDisabled = _ref.tileDisabled,
      view = _ref.view;

  var disabled = minDate && minDateTransform(minDate) > date || maxDate && maxDateTransform(maxDate) < date || tileDisabled && tileDisabled({ activeStartDate: activeStartDate, date: date, view: view });

  var addProps = void 0;
  if (Component === 'div') {
    addProps = {
      role: 'button',
      onKeyPress: disabled ? undefined : onClick && function () {
        return onClick(date);
      }
    };
  } else {
    addProps = {
      type: 'button'
    };
  }

  return _react2.default.createElement(
    Component,
    _extends({
      role: 'button',
      className: (0, _mergeClassNames2.default)(classes, tileClassName instanceof Function ? tileClassName({ date: date, view: view }) : tileClassName, 'react-calendar__tile--' + (disabled ? 'disabled' : 'enabled')),
      disabled: disabled,
      onClick: disabled ? undefined : onClick && function () {
        return onClick(date);
      },
      onMouseOver: onMouseOver && function () {
        return onMouseOver(date);
      },
      onFocus: onMouseOver && function () {
        return onMouseOver(date);
      },
      style: style
    }, addProps),
    _react2.default.createElement(
      'time',
      { dateTime: dateTime },
      children
    ),
    typeof tileContent === 'function' ? tileContent({ date: date, view: view }) : tileContent
  );
};

Tile.propTypes = _extends({}, _propTypes3.tileProps, {
  children: _propTypes2.default.node.isRequired,
  dateTime: _propTypes2.default.string.isRequired,
  maxDateTransform: _propTypes2.default.func.isRequired,
  minDateTransform: _propTypes2.default.func.isRequired
});

exports.default = Tile;