import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';


import AddQuestionBlock from "../AddQuestionBlock"


function CreateSurveyBlock({ classes }) {
  return (
    <div className={classes.container}>
      <div>
        <div>
          <Typography className={classes.createSurveyTitle} variant="h4" display="block" gutterBottom>
            Create Survey
          </Typography>
        </div>
        <form className={classes.surveyForm} noValidate autoComplete="off">
          
          <TextField className={classes.surveyFormItem} label="Survey title" variant="outlined" />

          <AddQuestionBlock />

          <div>
            <Button
              variant="contained"
              color="primary"
              size="small"
              className={classes.addButton}
              startIcon={<SaveIcon />}
            >
              Save
            </Button>
          </div>
        </form>
      </div>

    </div>
  )
}

CreateSurveyBlock.propTypes = {
  classes: PropTypes.object.isRequired
};

export default CreateSurveyBlock;
