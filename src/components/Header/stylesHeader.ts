import styled from "styled-components";

interface HeaderWrapperProps {
	theme: {
		colors: {
			primary: string;
			secondary: string;
		};
		colorText: {
			primary: string;
			secondary: string;
		};
		fontFamily: {
			title: string;
			text: string;
		};
	};
}

const HeaderWrapper = styled.div<HeaderWrapperProps>`
	color: ${({ theme }) => theme.colors.primary};
	font-size: 50px;
	font-family: ${({ theme }) => theme.fontFamily.title};
`;

const Parag = styled.p<HeaderWrapperProps>`
	font-family: ${({ theme }) => theme.fontFamily.text}, sans-serif;
	font-size: px;
`;

export { HeaderWrapper, Parag };
