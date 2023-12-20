import styled from 'styled-components';
import { Menu } from '@mui/material';
import { NavLink } from 'react-router-dom';

interface BtnMenuProps {
	$active: boolean;
}

const CustomizedMenu = styled(Menu)`
	& .MuiMenu-paper {
		min-width: 100%;
		margin: 5px 0 0 0;
		border-radius: 0;
		box-shadow: none;
		left: 0 !important;
	}

	& .MuiList-root {
		padding: 0;
		margin: 0;
	}
`;

const CatalogLink = styled.span`
	color: ${({ theme }) => theme.colorText.primary};
	text-transform: uppercase;
	text-decoration: none;

	& .MuiMenuItem-root {
		font-family: ${({ theme }) => theme.fontFamily.text}, sans-serif;
		font-size: 12px;
		border-bottom: none;
		padding: 16px;
	}
`;

const CustomLink = styled(NavLink)<BtnMenuProps>`
	color: ${({ theme }) => theme.colorText.primary};
	text-transform: uppercase;
	text-decoration: none;

	& .MuiMenuItem-root {
		font-family: ${({ theme }) => theme.fontFamily.text}, sans-serif;
		font-size: 12px;
		border-bottom: none;
		padding: 16px;
	}
`;

const BtnCatalogLine = styled.span<BtnMenuProps>`
	height: 30px;
	padding: ${(props) => (props.$active ? '0 0 0 8px' : 'none')};
	border-left: ${(props) => (props.$active ? `3px solid ${props.theme.colors.third}` : 'none')};
`;

const ArrowRight = styled.span`
	position: absolute;
	right: 16px;
	border: solid #000000;
	border-width: 0 1px 1px 0;
	display: inline-block;
	padding: 3px;
	transform: rotate(-45deg);
	margin: 0 0 2px 16px;
`;

const ArrowDown = styled.span`
	position: absolute;
	right: 16px;
	border: solid #000000;
	border-width: 0 1px 1px 0;
	display: inline-block;
	padding: 3px;
	transform: rotate(45deg);
	margin: 0 0 2px 16px;
`;

const SubMenuItem = styled(NavLink)`
	color: ${({ theme }) => theme.colorText.primary};
	text-transform: uppercase;
	text-decoration: none;
	border-bottom: none;

	& .MuiMenuItem-root {
		padding: 6px 26px;
		font-size: 12px;
		border-bottom: none;
	}
`;

export {
	CustomizedMenu,
	CustomLink,
	BtnCatalogLine,
	ArrowRight,
	ArrowDown,
	SubMenuItem,
	CatalogLink,
};
