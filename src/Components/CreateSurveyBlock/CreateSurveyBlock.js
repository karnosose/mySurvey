import React, { useReducer} from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import FormHelperText from '@material-ui/core/FormHelperText';
import SaveIcon from '@material-ui/icons/Save';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import reducer from './reducer'
import AddQuestionBlock from "../AddQuestionBlock"
import ShowStateTest from '../showStateTest'

function CreateSurveyBlock({ classes }) {
  const defaultState = {
    title: '',
    questions: []
  }
  const [state, dispatch] = useReducer(reducer, defaultState)

  const saveSurvey = () => {
    dispatch({
      type: 'validate'
    })
    dispatch({
      type: 'saveSurvey',
    })
  }

  const changeTitle = e => {
    dispatch({
      type: 'changeTitle',
      payload: e.target.value
    })
  }

  const getError = key => {
    let message = '';
    if(typeof state.errors !== 'undefined' && typeof state.errors[key]) {
      message = state.errors[key];
    }
    return message;
  }

  const hasError = key => {
    let error = false;
    if(typeof state.errors !== 'undefined' && typeof state.errors[key] !== 'undefined') {
      error = true;
    }
    return error;
  }
  
  return (
    <div className={classes.container}>
      <div>
        <ShowStateTest obj={state} />
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
          onSubmit={e => e.preventDefault()}
        >

          <TextField 
            error={hasError('title')}
            className={classes.surveyFormItem} 
            value={state.title}
            helperText={getError('title')}
            label="Survey title"
            onChange={e => changeTitle(e)}
            variant="outlined" 
          />

          <AddQuestionBlock />
          <FormHelperText error={hasError('questions')}>
            {getError('questions')}
          </FormHelperText> 
          <div>
            <Button
              variant="contained"
              color="primary"
              size="small"
              className={classes.addButton}
              startIcon={<SaveIcon />}
              onClick={saveSurvey}
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
