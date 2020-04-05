import React, {useState, useReducer} from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import FormHelperText from '@material-ui/core/FormHelperText';
import SaveIcon from '@material-ui/icons/Save';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import reducer from './reducer'
import AddQuestionBlock from "../AddQuestionBlock"


function CreateSurveyBlock({ classes }) {
  const defaultState = {
    title: '',
    questions: []
  }
  const [state, dispatch] = useReducer(reducer, defaultState);

  const saveSurvey = () => {
    
  }
  
  return (
    <div className={classes.container}>
      <div>
        <div>
          <Typography
            className={classes.createSurveyTitle}
            variant="h4"
            display="block" 
            gutterBottom
          >
            Create Survey
          </Typography>
        </div>
        <form
          className={classes.surveyForm} 
          noValidate 
          autoComplete="off"
        >

          <TextField 
            // error={errors.surveyTitle.status}
            className={classes.surveyFormItem} 
            value={state.title}
            // helperText={errors.surveyTitle.message}
            label="Survey title"
            onChange={e => dispatch({
              type: 'changeTitle',
              payload: e.target.value
            })}
            variant="outlined" 
          />

          <AddQuestionBlock />
          {/* <FormHelperText error={errors.questions ? errors.questions.status : false}>
            {errors.questions.message}
          </FormHelperText>  */}
          <div>
            <Button
              variant="contained"
              color="primary"
              size="small"
              className={classes.addButton}
              startIcon={<SaveIcon />}
              onClick={() => dispatch({
                type: 'saveSurvey'
              })}
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
