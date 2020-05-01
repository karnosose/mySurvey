import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(
  theme => ({
    questionCreatorContainer: {
      display: 'flex',
      flexDirection: 'column'
    },
    textFieldWrapper: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      width: '100%',
      '@media only screen and (min-width: 600px)': {
        flexDirection: 'row',
        justifyContent: 'center'
      }
    },
    titleLabel: {
      display: 'flex',
      alignItems: 'center',
      height: '48px',
      '@media only screen and (min-width: 600px)': {
        paddingRight: `${theme.customSpacing.base}`
      }
    },
    textFieldSection: {
      width: '80%',
      '@media only screen and (min-width: 600px)': {
        width: '50%'
      }
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
      },
      '&$disabled': {
        cursor: 'not-allowed',
        pointerEvents: 'all'
      }
    },
    cancelButton: {
      marginLeft: `${theme.customSpacing.base}`
    },
    disabled: {}
  }),
  { name: 'MuiButton' }
);
