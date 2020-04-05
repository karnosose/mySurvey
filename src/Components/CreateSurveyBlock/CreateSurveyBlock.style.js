import GLOBAL_STYLES from '../../Theme/GlobalStyles';

export const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    borderRadius: `${GLOBAL_STYLES.borders.borderRadius.base}`,
    // boxShadow: `${GLOBAL_STYLES.boxShadow.base}`,
    boxSizing: 'border-box',
    height: '100%',
    padding: `${GLOBAL_STYLES.spacing.small}`,
  },
  addButton: {
    float: "right"
  },
  createSurveyTitle: {
    color: GLOBAL_STYLES.color.mainColorDarkBlue
  },
  surveyForm : {
    width: 600,
  },
  surveyFormItem: {
    width: "100%" 
  }
};
