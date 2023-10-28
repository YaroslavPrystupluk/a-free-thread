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
	width: 160,
	display: 'flex',
	alignItems: 'center',
	textAlign: 'center',
	fontFamily: theme.fontFamily.text,
	fontStyle: 'normal',
	fontWeight: 400,
	lineHeight: '20px',
	position: 'relative',
	left: '40%',
	'& .MuiPaginationItem-page': {
		color: `${theme.colorText.third}!important`,
		backgroundColor: 'white!important',
		fontSize: 14,
		maxHeight: '20px!important',
		maxWidth: '20px!important',
		height: '20px!important',
		width: '20px!important',
		minHeight: '20px!important',
		minWidth: '20px!important',
	},
}));

export {
	StyleStar,
	StyleSquare,
	StyleCollectionPageMain,
	StyleTitleCollectionPage,
	StylePaginationBox,
};
