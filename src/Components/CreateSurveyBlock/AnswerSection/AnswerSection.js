import React from 'react';
import PropTypes from 'prop-types';

import CheckboxSection from '../CheckboxSection';
import DropdownSection from '../DropdownSection';
import InputSection from '../InputSection';
import RadiobuttonSection from '../RadiobuttonSection';
import { useStyles } from './AnswerSection.style';

function AnswerSection({ type }) {
  const classes = useStyles();

  const showType = typeToShow => {
    switch (typeToShow) {
      case 'input':
        return <InputSection />;
      case 'radiobutton':
        return <RadiobuttonSection />;
      case 'checkbox':
        return <CheckboxSection />;
      case 'dropdown':
        return <DropdownSection />;
      default:
        return null;
    }
  };

  return <div className={classes.answerSectionContainer}>{showType(type)}</div>;
}

AnswerSection.propTypes = {
  type: PropTypes.string.isRequired
};

export default AnswerSection;
