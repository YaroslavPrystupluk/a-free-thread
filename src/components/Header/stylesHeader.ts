import styled from "styled-components";

interface HeaderWrapperProps {
	thema: {
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
	color: ${({ thema }) => thema.colors.primary};
`;

export { HeaderWrapper };
