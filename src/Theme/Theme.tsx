import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

const theme = {
	colors: {
		primary: "#edcdb6",
		secondary: "#edcdb6",
		third: "#973a23",
		fourth: "#ffffff",
	},
	colorText: {
		primary: "#353840",
		secondary: "#ffffff",
		third: "#000000",
	},
	fontFamily: {
		title: "Kyiv",
		text: "Geneva",
	},
	media: {
		phone: "(min-width: 320px )",
		tablet: "(min-width: 768px)",
		desktop: "(min-width: 1220px)",
	},
};

interface MyComponentProps {
	children: ReactNode;
}

const Theme = ({ children }: MyComponentProps) => {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
