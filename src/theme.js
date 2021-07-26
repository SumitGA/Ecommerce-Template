import { createTheme } from '@material-ui/core/styles';

const ELPrimary = '#0B72B9';
const ELSecondary = '#FFBA60';
const theme = createTheme({
	palette: {
		primary: {
			main: ELPrimary
		},
		secondary: {
			main: ELSecondary
		}
	},
	typography: {
		tab: {
			fontFamily: 'B612',
			textTransform: 'none',
			fontWeight: 700,
			fontSize: '1rem'
		}
	}
});

export default theme;
