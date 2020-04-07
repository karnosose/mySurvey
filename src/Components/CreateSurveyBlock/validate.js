export const validate = (state) => {
    const errors = {};
    if(!state.title) {
      errors.title =  'Survey title can\'t be blank';
    };

    if(state.questions.length === 0) {
      errors.questions = 'You must have at least 2 questions';
    } 

    return errors;
  }