import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Slider } from '@material-ui/core';

import { useStyles } from './RangeAnswers.style';

function RangeAnswers({
  startValue,
  endValue,
  stepValue,
  receiveAnswers,
  questionId
}) {
  const classes = useStyles();
  const defaultValue = Math.abs(startValue - endValue) / 2;
  const [showValueLabel, setShowValueLabel] = useState(true);
  const [rangeValue, setRangeValue] = useState('');
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

  useEffect(() => {
    receiveAnswers([], rangeValue || defaultValue.toString(), questionId);
  }, [rangeValue]);

  const valuetext = value => {
    return `${value}`;
  };

  const commitHandler = (event, value) => {
    setRangeValue(value.toString());
    setShowValueLabel(false);
  };

  return (
    <div className={classes.container}>
      <Slider
        aria-labelledby="discrete-slider"
        defaultValue={defaultValue}
        getAriaValueText={valuetext}
        marks={marks}
        max={endValue}
        min={startValue}
        onChangeCommitted={commitHandler}
        step={stepValue}
        valueLabelDisplay={showValueLabel ? 'on' : 'auto'}
      />
    </div>
  );
}

RangeAnswers.propTypes = {
  startValue: PropTypes.number.isRequired,
  endValue: PropTypes.number.isRequired,
  stepValue: PropTypes.number.isRequired,
  questionId: PropTypes.string.isRequired,
  receiveAnswers: PropTypes.func.isRequired
};

export default RangeAnswers;
