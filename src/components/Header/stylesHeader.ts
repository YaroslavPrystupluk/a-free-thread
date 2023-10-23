import styled from 'styled-components';
import { Box } from '@mui/material';

interface BtnLangProps {
	$active: boolean;
}
const HeaderWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: ${({ theme }) => theme.colors.primary};

	@media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
		background: ${({ theme }) => theme.colors.fourth};
		border-bottom: 1px solid ${({ theme }) => theme.colors.third};
	}
`;

const LogoWrapper = styled.div`
	width: 49px;
	height: 38px;
	margin: 8px 5px 8px 26px;
	@media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
		width: 58px;
		height: 45px;
		margin: 8px 5px 8px 34px;
	}
	@media (min-width: ${({ theme }) => `${theme.breakpoints.xl}px`}) {
		width: 82px;
		height: 64px;
		margin: 8px 5px 8px 46px;
	}
`;
const Logo = styled.img`
	max-width: 100%;
`;

const PhoneWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
	margin: 19px 9px 19px 0;
	@media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
		display: none;
	}
`;

const PhoneNumber = styled.a`
	font-family: ${({ theme }) => theme.fontFamily.text}, sans-serif;
	color: ${({ theme }) => theme.colorText.primary};
	font-size: 12px;
	text-decoration: none;
`;

const Wrapper = styled(Box)`
	display: flex;
	@media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
		gap: 16px;
	}
	@media (min-width: ${({ theme }) => `${theme.breakpoints.xl}px`}) {
		gap: 32px;
	}
`;

const SearchDesktop = styled(Box)`
	display: none;
	@media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
		display: flex;
		align-items: center;
	}
`;

const BtnLang = styled.p<BtnLangProps>`
	font-family: ${({ theme }) => theme.fontFamily.text}, sans-serif;
	color: ${({ theme }) => theme.colorText.third};
	font-size: 10px;
	padding: 8px 4px;
	cursor: pointer;
	text-transform: uppercase;
	border-bottom: ${(props) => (props.$active ? `1px solid ${props.theme.colors.third}` : 'none')};

	@media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
		padding: 34px 0;
		font-size: 12px;
	}
	@media (min-width: ${({ theme }) => `${theme.breakpoints.xl}px`}) {
		font-size: 16px;
	}
`;

const SelectLanguage = styled.div`
	display: flex;
	margin: 0 26px 0 0;
	@media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
		gap: 14px;
		margin: 0 34px 0 0;
	}
	@media (min-width: ${({ theme }) => `${theme.breakpoints.xl}px`}) {
		margin: 0 45px 0 0;
		gap: 24px;
	}
`;

const SubHeader = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 4px 26px;
	border-bottom: 1px solid rgba(243, 198, 182, 0.5);
	@media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
		display: none;
	}
`;

export {
	HeaderWrapper,
	LogoWrapper,
	Logo,
	PhoneWrapper,
	PhoneNumber,
	Wrapper,
	SearchDesktop,
	SelectLanguage,
	BtnLang,
	SubHeader,
};
