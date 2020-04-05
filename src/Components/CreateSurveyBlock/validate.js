export const validate = () => {
    let validatedSuccessfully = true;

    let surveyTitleError = null;
    if(!surveyTitle) {
      validatedSuccessfully = false;
      surveyTitleError = {
        message: 'Survey title can\'t be blank',
        status: true
      }
    } else {
      surveyTitleError = {
        message: '',
        status: false
      }
    };

    let questionsError = null;

    if(!questionsError) {
      validatedSuccessfully = false;
      questionsError = {
        message: 'You must have at least 2 questions',
        status: true
      }
    } else {
      questionsError = {
        message: '',
        status: false
      }
    }

    setErrors({
      ...errors,
      surveyTitle: surveyTitleError,
      questions: questionsError
    })

    return validatedSuccessfully;
  }