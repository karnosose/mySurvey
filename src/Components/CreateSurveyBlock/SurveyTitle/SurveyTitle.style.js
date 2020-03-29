import GLOBAL_STYLES from '../../../Theme/GlobalStyles';

export const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: `${GLOBAL_STYLES.spacing.small}`
  },
  titleWrapper: {
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    width: '100%'
  },
  titleLabel: {
    display: 'flex',
    alignItems: 'center',
    paddingRight: `${GLOBAL_STYLES.spacing.small}`
  },
  editIcon: {
    marginLeft: 'auto',
    position: 'absolute',
    right: 0
  }
};
