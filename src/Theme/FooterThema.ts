import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { MenuItem } from '@mui/material';

const FooterWrap = styled.footer`
	background: ${({ theme }) => theme.colors.primary};
	padding: 21px 26px;

	@media (min-width: ${({ theme }) => `${theme.breakpoints.xl}px`}) {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 69px;
	}
`;

const LogoWrapper = styled.div`
	width: 20%;
	height: auto;
	margin: 0 0 -16px 0;
	@media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
		width: 10%;
		height: auto;
	}
	@media (min-width: ${({ theme }) => `${theme.breakpoints.xl}px`}) {
		width: 100%;
		height: auto;
	}
`;
const LogoIcon = styled.img`
	max-width: 100%;
`;

const WrapperMenuFooter = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 32px;
	@media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
		flex-direction: row;
	}
`;
const MenuFooter = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 16px;
	list-style-type: none;
	font-size: 12px;
	font-family: ${({ theme }) => theme.fontFamily.text}, sans-serif;
	color: ${({ theme }) => theme.colorText.primary};

	@media (min-width: ${({ theme }) => `${theme.breakpoints.xl}px`}) {
		min-width: 264px;
		font-size: 14px;
	}
`;

const TitleMenu = styled.p`
	font-size: 14px;
	text-transform: uppercase;
	@media (min-width: ${({ theme }) => `${theme.breakpoints.xl}px`}) {
		font-size: 16px;
	}
`;

const FooterLink = styled.a`
	font-family: ${({ theme }) => theme.fontFamily.text}, sans-serif;
	color: ${({ theme }) => theme.colorText.primary};
	font-size: 12px;
	text-decoration: none;
	cursor: pointer;
	@media (min-width: ${({ theme }) => `${theme.breakpoints.xl}px`}) {
		font-size: 14px;
	}
`;

const IconMenuSocial = styled.img`
	max-width: 24px;
	margin: 0 16px 0 0;
	@media (min-width: ${({ theme }) => `${theme.breakpoints.xl}px`}) {
		max-width: 40px;
	}
`;

const IconMenuBank = styled.img`
	max-width: 36px;
	margin: 0 16px 0 0;
	@media (min-width: ${({ theme }) => `${theme.breakpoints.xl}px`}) {
		max-width: 48px;
	}
`;

const CustomLink = styled(NavLink)`
	color: ${({ theme }) => theme.colorText.primary};
	text-decoration: none;

	& .MuiMenuItem-root {
		font-family: ${({ theme }) => theme.fontFamily.text}, sans-serif;
		font-size: 12px;
		border-bottom: none;
		@media (min-width: ${({ theme }) => `${theme.breakpoints.xl}px`}) {
			font-size: 14px;
		}
	}
`;

const SubMenuItem = styled(NavLink)`
	color: ${({ theme }) => theme.colorText.primary};
	text-decoration: none;

	& .MuiMenuItem-root {
		font-size: 12px;
		padding: 6px 26px;
		border-bottom: none;
		@media (min-width: ${({ theme }) => `${theme.breakpoints.xl}px`}) {
			font-size: 14px;
		}
	}
`;

const CustomMenuItem = styled(MenuItem)`
	&& {
		padding: 0;
		min-height: 12px;
	}
`;

const CustomSubMenuItem = styled(MenuItem)`
	&& {
		min-height: 12px;
	}
`;

export {
	FooterWrap,
	LogoWrapper,
	LogoIcon,
	WrapperMenuFooter,
	MenuFooter,
	TitleMenu,
	IconMenuSocial,
	IconMenuBank,
	FooterLink,
	CustomLink,
	SubMenuItem,
	CustomMenuItem,
	CustomSubMenuItem,
};
