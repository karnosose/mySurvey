import React from "react";
import PropTypes from "prop-types";

function AddQuestionBlock ({classes}) {
  return (
    <div className={classes.container}>
      question
    </div>
  )
}

AddQuestionBlock.propTypes = {
  classes: PropTypes.object.isRequired
}

export default AddQuestionBlock;