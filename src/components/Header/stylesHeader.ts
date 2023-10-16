import styled from "styled-components";

const HeaderWrapper = styled.section`
	display: flex;
	align-items: center;
	gap: 9px;
	background: ${({ theme }) => theme.colors.primary};
	@media (min-width: ${({ theme }) => `${theme.breakpoints.sm}px`}) {
		background: ${({ theme }) => theme.colors.fourth};
	}
`;

const LogoWrapper = styled.div`
	width: 49px;
	height: 38px;
	margin: 8px 5px 8px 26px;
	@media (min-width: ${({ theme }) => `${theme.breakpoints.sm}px`}) {
		width: 58px;
		height: 45px;
	}
	@media (min-width: ${({ theme }) => `${theme.breakpoints.xl}px`}) {
		width: 82px;
		height: 64px;
	}
`;
const Logo = styled.img`
	max-width: 100%;
`;

const PhoneWrapper = styled.div`
	display: flex;
	gap: 8px;
`;

const PhoneNumber = styled.a`
	font-family: ${({ theme }) => theme.fontFamily.text};
	color: ${({ theme }) => theme.colorText.primary};
	font-size: 12px;
	text-decoration: none;
`;

const SelectLanguage = styled.div`
	display: flex;
	align-items: center;
`;

const BtnLang = styled.p`
	font-family: ${({ theme }) => theme.fontFamily.text};
	color: ${({ theme }) => theme.colorText.third};
	font-size: 10px;
	padding: 8px 4px;
	border-bottom: 3px solid ${({ theme }) => theme.colors.third};
`;

export { HeaderWrapper, LogoWrapper, Logo, PhoneWrapper, PhoneNumber, SelectLanguage, BtnLang };
