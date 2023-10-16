import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

const theme = {
	colors: {
		primary: "#edcdb6",
		secondary: "#973a23",
	},
	colorText: {
		primary: "#000000",
		secondary: "#ffffff",
		price: "#472124",
	},
	fontFamily: {
		title: "Kyiv",
		text: "Geneva",
	},
	breakpoints: {
		xs: 320,
		sm: 480,
		md: 768,
		lg: 992,
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
