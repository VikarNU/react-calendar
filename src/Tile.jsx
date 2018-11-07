import React from 'react';
import PropTypes from 'prop-types';
import mergeClassNames from 'merge-class-names';

import { tileProps } from './shared/propTypes';

const Tile = ({
  activeStartDate,
  children,
  component: Component,
  classes,
  date,
  dateTime,
  maxDate,
  maxDateTransform,
  minDate,
  minDateTransform,
  onClick,
  onMouseOver,
  style,
  tileClassName,
  tileContent,
  tileDisabled,
  view,
}) => {
  const disabled = (minDate && minDateTransform(minDate) > date)
    || (maxDate && maxDateTransform(maxDate) < date)
    || (tileDisabled && tileDisabled({ activeStartDate, date, view }));

  let addProps;
  if (Component === 'div') {
    addProps = {
      role: 'button',
      onKeyPress: disabled ? undefined : onClick && (() => onClick(date)),
    };
  } else {
    addProps = {
      type: 'button',
    };
  }

  return (
    <Component
      role="button"
      className={mergeClassNames(
        classes,
        tileClassName instanceof Function ? tileClassName({ date, view }) : tileClassName,
        `react-calendar__tile--${disabled ? 'disabled' : 'enabled'}`,
      )}
      disabled={disabled}
      onClick={disabled ? undefined : onClick && (() => onClick(date))}
      onMouseOver={onMouseOver && (() => onMouseOver(date))}
      onFocus={onMouseOver && (() => onMouseOver(date))}
      style={style}
      {...addProps}
    >
      <time dateTime={dateTime}>
        {children}
      </time>
      {typeof tileContent === 'function' ? tileContent({ date, view }) : tileContent}
    </Component>
  );
};

Tile.propTypes = {
  ...tileProps,
  children: PropTypes.node.isRequired,
  dateTime: PropTypes.string.isRequired,
  maxDateTransform: PropTypes.func.isRequired,
  minDateTransform: PropTypes.func.isRequired,
};

export default Tile;
