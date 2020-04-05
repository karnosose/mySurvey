import React from "react";
import PropTypes from "prop-types";
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';

function AddQuestionBlock ({classes}) {
  return (
    <div className={classes.container}>
      <div className={classes.addQuestion}>

        <IconButton 
          className={classes.plusIcon}
          color="primary" 
          aria-label="add question" 
          component="span"
        >
          <Icon fontSize="large">add_circle</Icon>
        </IconButton>

        <span> Add question</span>
      </div>
    </div>
  )
}

AddQuestionBlock.propTypes = {
  classes: PropTypes.object.isRequired
}

export default AddQuestionBlock;