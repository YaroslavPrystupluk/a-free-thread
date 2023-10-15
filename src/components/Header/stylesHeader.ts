import styled from "styled-components";

const HeaderWrapper = styled.header`
	display: flex;
	align-items: center;
	gap: 8px;
	background: ${({ theme }) => theme.colors.primary};
	@media ${({ theme }) => theme.media.tablet} {
		background: ${({ theme }) => theme.colors.fourth};
	}
`;

const LogoWrapper = styled.div`
	width: 49px;
	height: 38px;
	margin: 8px 4px 8px 26px;
	@media ${({ theme }) => theme.media.tablet} {
		width: 58px;
		height: 45px;
	}
	@media ${({ theme }) => theme.media.desktop} {
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
