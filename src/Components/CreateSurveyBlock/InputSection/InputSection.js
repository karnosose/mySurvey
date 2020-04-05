import React, { useState } from 'react';

import Typography from '@material-ui/core/Typography';

import inputText from '../../../assets/images/inputOptions/input-text.png';
import inputNumber from '../../../assets/images/inputOptions/input-number.png';
import inputDate from '../../../assets/images/inputOptions/input-date.png';
import { useStyles } from './InputSection.style';
import ImageContainer from '../ImageContainer';

const IMAGES = [
  { name: 'text', src: inputText, tooltip: 'Text', text: 'Text' },
  { name: 'number', src: inputNumber, tooltip: 'Number', text: 'Number' },
  { name: 'date', src: inputDate, tooltip: 'Date', text: 'Date' }
];
const TITLE = 'Choose input field type';

function InputSection() {
  const classes = useStyles();
  const [image, setImage] = useState(null);

  const handleClick = e => {
    if (e.target.alt) setImage(e.target.alt);
    else setImage(e.target.children[0].alt);
  };

  const handleEnterKey = e => {
    if (e.key === 'Enter') handleClick(e);
  };
  return (
    <div className={classes.inputSectionContainer}>
      <div className={classes.inputSectionTitleWrapper}>
        <Typography variant="h5">{TITLE}</Typography>
      </div>
      <div className={classes.inputSectionTypeWrapper}>
        {IMAGES.map(img => (
          <ImageContainer
            handleClick={handleClick}
            handleEnterKey={handleEnterKey}
            classes={classes}
            imageClicked={image}
            img={img}
            key={img.name}
          />
        ))}
      </div>
    </div>
  );
}

export default InputSection;