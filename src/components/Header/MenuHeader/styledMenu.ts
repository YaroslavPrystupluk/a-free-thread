import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';

const WrapperMenu = styled.div`
	display: none;
	@media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 14px;
	}
	@media (min-width: ${({ theme }) => `${theme.breakpoints.xl}px`}) {
		gap: 24px;
	}
`;
const CustomLink = styled(NavLink)`
	color: ${({ theme }) => theme.colorText.third};
	text-transform: uppercase;
	text-decoration: none;
	& .MuiMenuItem-root {
		font-family: ${({ theme }) => theme.fontFamily.text}, sans-serif;
		font-size: 10px;
		border-bottom: none;
		padding: 10px 16px;
		line-height: 140%;
		letter-spacing: 0.24px;
		@media (min-width: ${({ theme }) => `${theme.breakpoints.xl}px`}) {
			font-size: 12px;
		}
	}
`;
const MenuButton = styled(Button)`
	&& {
		font-family: ${({ theme }) => theme.fontFamily.text}, sans-serif;
		color: ${({ theme }) => theme.colorText.third};
		font-size: 12px;
		padding: 30px 0;
		@media (min-width: ${({ theme }) => `${theme.breakpoints.xl}px`}) {
			font-size: 16px;
		}
	}
`;

export { WrapperMenu, CustomLink, MenuButton };
