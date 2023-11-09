import styled from 'styled-components';

const StyleCollectionPageMain = styled('div')(({ theme }) => ({
	width: '80%',
	margin: 'auto',
	[`@media screen and (min-width: ${theme.breakpoints.md}px)`]: {
		width: '45%',
	},
}));

const StyleStar = styled('div')(({ theme }) => ({
	position: 'relative',
	right: 5,
	top: 10,
	zIndex: -1,
	[`@media screen and (min-width: ${theme.breakpoints.md}px)`]: {
		right: 10,
		top: 5,
	},
	[`@media screen and (min-width: ${theme.breakpoints.xl}px)`]: {
		top: -4,
	},
	'& svg': {
		[`@media screen and (min-width: ${theme.breakpoints.md}px)`]: {
			width: 24,
			height: 24,
		},
	},
}));

const StyleSquare = styled('div')(({ theme }) => ({
	position: 'relative',
	width: 28,
	height: 28,
	left: 20,
	top: 5,
	zIndex: -1,
	opacity: 0.2,
	backgroundColor: '#EDCDB6',
	'&.product': {
		left: -5,
		top: 30,
		[`@media screen and (min-width: ${theme.breakpoints.md}px)`]: {
			left: '25%',
		},
	},
	'&.main': {
		display: 'none',
	},
	[`@media screen and (min-width: ${theme.breakpoints.xl}px)`]: {
		width: 40,
		height: 40,
		top: -7,
	},
}));

const StyleTitleCollectionPage = styled('div')(({ theme }) => ({
	display: 'flex',
	[`@media screen and (min-width: ${theme.breakpoints.xl}px)`]: {
		margin: '20px 0',
	},
}));

const StylePaginationBox = styled('div')(({ theme }) => ({
	width: 210,
	display: 'flex',
	alignItems: 'center',
	textAlign: 'center',
	fontFamily: theme.fontFamily.text,
	fontStyle: 'normal',
	fontWeight: 400,
	lineHeight: '20px',
	position: 'relative',
	left: '35%',
	'& .MuiPagination-ul': {
		gap: 3,
	},
	'& .MuiPaginationItem-page': {
		color: `${theme.colorText.third}!important`,
		backgroundColor: 'white!important',
		fontSize: 16,
		margin: 0,
		minHeight: '20px!important',
		minWidth: '20px!important',
		[`@media screen and (min-width: ${theme.breakpoints.xl}px)`]: {
			fontSize: 18,
		},
	},
	[`@media screen and (min-width: ${theme.breakpoints.md}px)`]: {
		left: '145%',
	},
	[`@media screen and (min-width: ${theme.breakpoints.xl}px)`]: {
		width: 230,
		left: '160%',
		fontSize: 18,
	},
}));

const StylePaginationButton = styled('div')(({ theme }) => ({
	display: 'flex',
	position: 'relative',
	fontSize: 14,
	bottom: 10,
	alignContent: 'flex-start',
	alignItems: 'center',
	[`@media screen and (min-width: ${theme.breakpoints.xl}px)`]: {
		fontSize: 18,
	},
	'&.countPagination1': {
		position: 'relative',
		top: 20,
	},
	'&.countPagination2': {
		position: 'relative',
		bottom: -10,
	},
}));

const StyleDriverIcon = styled('span')(() => ({
	display: 'inline-block',
	margin: '5px 2px',
	position: 'relative',
	top: 10,
	right: 3,
}));

export {
	StyleStar,
	StyleSquare,
	StyleCollectionPageMain,
	StyleTitleCollectionPage,
	StylePaginationBox,
	StylePaginationButton,
	StyleDriverIcon,
};
