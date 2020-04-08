import {validate} from './validate'

function addToSurveys(state){
  const surveys = localStorage.getItem('surveys') ? JSON.parse(localStorage.getItem('surveys')) : [];

  const newSurvey = {
    id: Date.now(),
    title: state.title,
    questions: state.questions
  }
  
  surveys.push(newSurvey) 
  
  localStorage.setItem('surveys', JSON.stringify(surveys))
}

export default function (state, action) {
  switch(action.type) {
    case 'changeTitle' :
      return {
        ...state,
        title: action.payload
      }
    case 'addQuestion': 
      return {
        ...state,
        questions:  [{title: '', id: action.payload}, ...state.questions]
      };
    case 'saveSurvey':
      // if validation passed successfully then we add data to storage
      if(typeof state.errors === 'undefined' || Object.keys(state.errors).length === 0){
        addToSurveys(state);
        return {
          title: '',
          questions: []
        };
      }

      return state;
    case 'validate': 
      return {
        ...state,
        errors: validate(state)
      }

    default: 
      return state;
  }
}