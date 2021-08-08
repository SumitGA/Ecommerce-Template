import { createTheme } from '@material-ui/core/styles';
import {red, amber, green} from '@material-ui/core/colors';

const ELPrimary = '#0B72B9';
const ELSecondary = '#FFBA60';
const SMOKEWHITE= '#F5F5F5';
const GREY = '#383838';
const RED= red[100];
const AMBER= amber[100];
const GREEN = green[100];
const theme = createTheme({
	palette: {
		primary: {
			main: ELPrimary
		},
		secondary: {
			main: ELSecondary
		},
    error: {
      main: RED
    },
    warning: {
      main: AMBER
    },
    success: {
      main: GREEN
    },
    smokeWhite: {
      main: SMOKEWHITE
    },
    greyShade: {
      main: GREY
    }
	},
	typography: {
		tab: {
			fontFamily: 'sans-serif',
			textTransform: 'none',
			fontWeight: 700,
			fontSize: '1rem'
		},
	}
});

export default theme;
