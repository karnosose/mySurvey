import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import FormHelperText from '@material-ui/core/FormHelperText';
import SaveIcon from '@material-ui/icons/Save';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';


import AddQuestionBlock from "../AddQuestionBlock"


function CreateSurveyBlock({ classes }) {
  const [surveyTitle, setSurveyTitle] = useState('');

  const [errors, setErrors] = useState({
    surveyTitle: {
      message: '',
      status: false
    },
    questions: {
      message: '',
      status: false
    },
    questionType: {
      message: '',
      status: false
    }
  });

  const [questions, setQuestions] = useState('')

  const validateForm = () => {
    const surveyTitleError = surveyTitle === "" ?  {
      message: 'survey title can\'t be blank',
      status: true
    } : {
      message: '',
      status: false
    };

    const questionsError = questions.length <=1 ? {
      message: "you should have at least 2 questions",
      status: true
    } : {
      message: '',
      status: false
    }

    
    
    setErrors({
      ...errors,
      surveyTitle: surveyTitleError,
      questions: questionsError
    })
  }

  const saveSurvey = () => {
    validateForm();

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
            error={errors.surveyTitle.status}
            className={classes.surveyFormItem} 
            helperText={errors.surveyTitle.message}
            label="Survey title"
            onChange={e => setSurveyTitle(e.target.value)}
            variant="outlined" 
          />

          <AddQuestionBlock />
          <FormHelperText error={errors.questions.status}>
            {errors.questions.message}
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
