import React from 'react';
import PropTypes from 'prop-types';

import { Slider } from '@material-ui/core';

import { useStyles } from './RangeAnswers.style';

function RangeAnswers({ startValue, endValue, stepValue }) {
  const classes = useStyles();

  const marks = [
    {
      value: startValue,
      label: startValue
    },
    {
      value: endValue,
      label: endValue
    }
  ];

  function valuetext(value) {
    return `${value}`;
  }

  return (
    <div className={classes.container}>
      <Slider
        defaultValue={startValue}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={stepValue}
        marks={marks}
        min={startValue}
        max={endValue}
      />
    </div>
  );
}

RangeAnswers.propTypes = {
  startValue: PropTypes.number.isRequired,
  endValue: PropTypes.number.isRequired,
  stepValue: PropTypes.number.isRequired
};

export default RangeAnswers;