import React from 'react';

import AnswerInputSection from '../AnswerInputSection';
import { useStyles } from './AnswerSection.style';

function AnswerSection() {
  const classes = useStyles();

  return (
    <div className={classes.answerSectionContainer}>
      <AnswerInputSection />
    </div>
  );
}

export default AnswerSection;
