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
		title: "#37326A",
	},
	fontFamily: {
		title: "Kyiv",
		text: "Geneva",
		list: "Philosopher",
	},
};

interface MyComponentProps {
	children: ReactNode;
}

const Theme = ({ children }: MyComponentProps) => {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

console.log(theme);

export default Theme;
