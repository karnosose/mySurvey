import GLOBAL_STYLES from '../../Theme/GlobalStyles';

export const styles = {
  container: {
    display: "flex",
    borderRadius: `${GLOBAL_STYLES.borders.borderRadius.base}`,
    // boxShadow: `${GLOBAL_STYLES.boxShadow.base}`,
    boxSizing: 'border-box',
    height: '100%',
    marginTop: `${GLOBAL_STYLES.spacing.small}`,
  },
  addQuestion: {
    color: GLOBAL_STYLES.color.mainColorDarkBlue
  },
  plusIcon: {
    color: GLOBAL_STYLES.color.mainColorGreen,
    cursor: "pointer",
    marginLeft: `-${GLOBAL_STYLES.spacing.base}`
  }
};
