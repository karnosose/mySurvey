import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  surveyTitleCreatorContainer: {
    display: 'flex',
    flexDirection: 'column'
  },
  textFieldWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '@media only screen and (min-width: 600px)': {
      flexDirection: 'row',
      justifyContent: 'center'
    }
  },
  titleLabel: {
    display: 'flex',
    alignItems: 'center',
    height: '48px',
    textAlign: 'center',
    '@media only screen and (min-width: 600px)': {
      paddingRight: `${theme.customSpacing.base}`
    }
  },
  textFieldSection: {
    display: 'flex',
    width: '80%',
    paddingLeft: '48px',
    '@media only screen and (min-width: 600px)': {
      paddingLeft: 0,
      width: '50%'
    }
  },
  iconWrapper: {
    display: 'flex'
  },
  helpIcon: {
    color: `${theme.color.yellowButton}`
  },
  helpIconArrow: {
    color: `${theme.color.yellowButton}`,
    fontSize: '10px'
  },
  helpIconTooltip: {
    backgroundColor: `${theme.color.yellowButton}`,
    fontSize: '14px'
  },
  errorIcon: {
    color: `${theme.color.redButton}`
  },
  errorIconArrow: {
    color: `${theme.color.redButton}`,
    fontSize: '10px'
  },
  errorIconTooltip: {
    backgroundColor: `${theme.color.redButton}`,
    fontSize: '14px'
  },
  checkIconWrapper: {
    display: 'flex',
    width: '48px',
    marginTop: '16px'
  },
  checkIconContainer: {
    margin: '0 auto'
  },
  checkIcon: {
    color: `${theme.color.mainColorGreen}`
  },
  buttonWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: `${theme.customSpacing.base}`
  },
  button: {
    backgroundColor: `${theme.color.mainColorGreen}`,
    color: 'white',
    '&:hover': {
      backgroundColor: `${theme.color.buttonHoverColorGreen}`
    }
  }
}));
