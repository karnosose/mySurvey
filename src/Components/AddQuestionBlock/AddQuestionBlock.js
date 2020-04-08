import React, { useContext } from "react";
import PropTypes from "prop-types";
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import { SurveyContext } from "../CreateSurveyBlock/context";

function AddQuestionBlock ({classes}) {
  const {state, dispatch} = useContext(SurveyContext)
  const addQuestionField = e => {
    dispatch({
      type: "addQuestion",
      payload: e.target.value
    })
  }
  return (
    <div className={classes.container}>
      <div className={classes.questionsList}>
        {state.questions.map(question => (
          <div className={classes.question}>
            <input value={question.title} />
          </div>
        ))}
      </div>
      <div className={classes.addQuestion}>

        <IconButton 
          onClick={e => addQuestionField(e)}
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