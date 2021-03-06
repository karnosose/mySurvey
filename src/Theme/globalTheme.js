import { createMuiTheme } from '@material-ui/core/styles';

const boxShadowColor = '#79d5a3';
const buttonHoverColorGreen = '#11703C';
const mainColorDarkBlue = '#282C34';
const mainColorGreen = '#20BA66';
const mainTextColor = '#282C34';
const simpleWhite = '#ffffff';

const lightGreyBorder = '#e4dddd';
const redButton = '#EA4335';
const yellowButton = '#FBBC05';

const BORDER_RADIUS_VALUE = 10;
const MAIN_FONT_SIZE = 14;
const MAIN_SPACING_VALUE = 14;

const theme = createMuiTheme({
  borders: {
    borderRadius: {
      base: `${BORDER_RADIUS_VALUE}px`,
      large: `${BORDER_RADIUS_VALUE * 2}px`
    }
  },
  boxShadow: {
    base: `0px 0px 5px 1px ${boxShadowColor}`
  },
  color: {
    boxShadowColor,
    buttonHoverColorGreen,
    lightGreyBorder,
    mainColorDarkBlue,
    mainColorGreen,
    redButton,
    simpleWhite,
    yellowButton
  },
  customSpacing: {
    xSmall: `${MAIN_SPACING_VALUE * 0.2}px`,
    small: `${MAIN_SPACING_VALUE * 0.5}px`,
    base: `${MAIN_SPACING_VALUE}px`,
    midLarge: `${MAIN_SPACING_VALUE * 1.25}px`,
    large: `${MAIN_SPACING_VALUE * 2}px`,
    xLarge: `${MAIN_SPACING_VALUE * 3}px`,
    xxLarge: `${MAIN_SPACING_VALUE * 4}px`,
    xxxLarge: `${MAIN_SPACING_VALUE * 6}px`,
    xxxxLarge: `${MAIN_SPACING_VALUE * 8}px`
  },
  customTypography: {
    fontColor: {
      clicked: mainColorGreen,
      base: mainTextColor
    },
    fontFamily: {
      base: 'sans-serif'
    },
    fontSize: {
      base: `${MAIN_FONT_SIZE}px`
    }
  }
});

export { theme as default };
