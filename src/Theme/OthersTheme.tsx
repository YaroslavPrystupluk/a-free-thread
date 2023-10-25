import styled from 'styled-components';
import Grid from '@mui/material/Grid';

const StyleTextError = styled('div')({
	color: '#9A9292',
	margin: '20px 0',
});

const StyleGridWrapper = styled(Grid)({
	width: '85%',
	margin: '20px auto',
});

const StyleGrid = styled(Grid)({
	display: 'flex',
	flexDirection: 'column!important',
	alignItems: 'center',
	justifyContent: 'center',
	textAlign: 'center',
});

const StyleStar = styled('div')(({ theme }) => ({
	// position: 'relative',
	left: '33%',
	bottom: 53,
	zIndex: -1,
	[`@media screen and (min-width: ${theme.breakpoints.md}px)`]: {
		left: '18%',
	},
}));

const StyleCollectionPageMain = styled('div')(({ theme }) => ({
	width: '80%',
	margin: 'auto',
	[`@media screen and (min-width: ${theme.breakpoints.md}px)`]: {
		width: '50%',
	},
}));

const StyleSquare = styled('div')(({ theme }) => ({
	// position: 'relative',
	width: 28,
	height: 28,
	right: '32%',
	top: 30,
	zIndex: -1,
	opacity: 0.2,
	backgroundColor: '#EDCDB6',
	[`@media screen and (min-width: ${theme.breakpoints.md}px)`]: {
		right: '17%',
	},
}));

export {
	StyleGrid,
	StyleGridWrapper,
	StyleTextError,
	StyleStar,
	StyleSquare,
	StyleCollectionPageMain,
};
