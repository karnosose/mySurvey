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
        questions: []
      }
    case 'saveSurvey':
      addToSurveys(state);
      return {
        title: '',
        questions: []
      };
    default: 
      return state;
  }
}