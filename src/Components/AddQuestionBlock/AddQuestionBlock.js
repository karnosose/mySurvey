import React, { useEffect, useState, useContext } from "react";
import uuid from 'react-uuid'

import PropTypes from "prop-types";
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';

import { SurveyContext } from "../CreateSurveyBlock/context";



function AddQuestionBlock ({classes}) {

  const {state, dispatch} = useContext(SurveyContext);
  const [newQuestions, setQuestions] = useState(state.questions)
  // const questionInput = useRef(null);

  // useEffect(() => {
  //   if (question) {
  //       qestionInput.current.focus();
  //   }
  // }, [question]);

  const addQuestionField = () => {
    dispatch({
      type: "addQuestion",
      payload: uuid()
    })
  }
  const questionChangeHandler = (e, questionId) => {
    setQuestions([
      ...newQuestions,
      [newQuestions.filter(question => question.id !== questionId), {id: questionId, title: e.target.value}]
    ])

    // dispatch({
    //   type: "changeQuestion",
    //   payload: questions
    // })
    // dispatch({
    //   type: "changeQuestion",
    //   payload: {
    //     id: questionId,
    //     title: e.target.value
    //   }
    // })
  }
  const addQuestion= () => {
    dispatch({
      type: "changeQuestion",
      payload: newQuestions
    })
  }
  return (
    <div className={classes.questionsContainer}> 
      <div className={classes.questionsList}>
        {newQuestions.map(question => (
          <>
            <TextField 
              className={classes.question} 
              key={uuid()}
              // error={hasError('title')}
              value={question.title} 
              onChange={e => questionChangeHandler(e, question.id)}
              // helperText={getError('title')}
              label="Type question"
              // questionRef={questionInput}

              // onChange={e => changeTitle(e)}
              variant="outlined" 
            />
          
            <IconButton 
              onClick={addQuestion}
              className={classes.plusIcon}
              color="primary" 
              aria-label="add question" 
              component="span"
            >
              <Icon fontSize="large">add_circle</Icon>
            </IconButton>
          </>

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