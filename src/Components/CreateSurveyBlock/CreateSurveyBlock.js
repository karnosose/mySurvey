import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';


function CreateSurveyBlock({ classes }) {
  return (
    <div className={classes.container}>
      <div>
        <div>
          <Typography variant="h4" display="block" gutterBottom="true">
            Create Survey
          </Typography>
        </div>

        <form className={classes.surveyForm} noValidate autoComplete="off">
          <TextField className={classes.surveyFormItem} label="Survey title" variant="outlined" />
        </form>
      </div>
    </div>
  )
}

CreateSurveyBlock.propTypes = {
  classes: PropTypes.object.isRequired
};

export default CreateSurveyBlock;
