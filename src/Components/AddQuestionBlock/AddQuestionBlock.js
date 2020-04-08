import React, { useContext } from "react";
import uuid from 'react-uuid'

import PropTypes from "prop-types";
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';

import { SurveyContext } from "../CreateSurveyBlock/context";



function AddQuestionBlock ({classes}) {

  const {state, dispatch} = useContext(SurveyContext)

  const addQuestionField = () => {
    dispatch({
      type: "addQuestion",
      payload: uuid()
    })
  }
  const questionChangeHandler = e => {
    dispatch({
      type: "addQuestion",
      payload: e.target.value
    })
  }
  return (
    <div className={classes.questionsContainer}> 
      <div className={classes.questionsList}>
        {state.questions.map(question => (
          <TextField 
            className={classes.question} 
            key={uuid()}
            // error={hasError('title')}
            value={question.title} 
            onChange={e => questionChangeHandler(e)}
            // helperText={getError('title')}
            label="Type question"
            // onChange={e => changeTitle(e)}
            variant="outlined" 
          />
        ))}
      </div>
      <div className={classes.addQuestion}>

        <IconButton 
          onClick={addQuestionField}
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