import styled from "styled-components";

const HeaderWrapper = styled.div`
	color: ${({ theme }) => theme.colors.primary};
	font-size: 50px;
	font-family: ${({ theme }) => theme.fontFamily.title};
`;

const Parag = styled.p`
	font-family: ${({ theme }) => theme.fontFamily.text}, sans-serif;
	font-size: 16px;
`;

export { HeaderWrapper, Parag };
