import React from "react";
import PropTypes from "prop-types";

import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Icon from '@material-ui/core/Icon';

import Typography from '@material-ui/core/Typography';

function AddQuestionBlock ({classes}) {
  return (
    <div className={classes.container}>
      <div>
        <Icon className={classes.plusIcon} fontSize="large">add_circle</Icon>
      </div>
      <div className={classes.addQuestion}>
        <Typography>
          Add question
        </Typography>
      </div>
    </div>
  )
}

AddQuestionBlock.propTypes = {
  classes: PropTypes.object.isRequired
}

export default AddQuestionBlock;