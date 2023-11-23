import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

declare module 'styled-components' {
	export interface Itheme {
		colors: {
			primary: string;
			secondary: string;
			third: string;
			fourth: string;
		};
		colorText: {
			primary: string;
			secondary: string;
			price: string;
			third: string;
		};
		fontFamily: {
			title: string;
			text: string;
		};
		breakpoints: {
			xs: number;
			sm: number;
			md: number;
			lg: number;
			xl: number;
		};
	}
}

const theme = {
	colors: {
		primary: '#edcdb6',
		secondary: '#edcdb6',
		third: '#973a23',
		fourth: '#ffffff',
		star: '#c77a54',
	},
	colorText: {
		primary: '#353840',
		secondary: '#ffffff',
		price: '#472124',
		third: '#000000',
		fourth: '#472124',
	},
	fontFamily: {
		title: 'Kyiv',
		text: 'Geneva',
	},
	breakpoints: {
		xs: 320,
		sm: 480,
		mdm: 600,
		md: 768,
		lg: 992,
		xsl: 1120,
		xl: 1220,
	},
};

interface MyComponentProps {
	children: ReactNode;
}

const Theme = ({ children }: MyComponentProps) => {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
