import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    minWidth: '300px',
    maxWidth: '800px',
    width: '90vw'
  }
}));
