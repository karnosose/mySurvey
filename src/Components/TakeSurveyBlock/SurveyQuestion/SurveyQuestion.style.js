import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    padding: `${theme.customSpacing.small}`
  },
  root: {
    maxWidth: 345
  }
}));
