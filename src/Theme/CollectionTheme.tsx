import { Button, ImageList } from '@mui/material';
import styled from 'styled-components';

const StyleCollectionImg = styled('img')(() => ({
	height: 300,
	width: 290,
	padding: 12,
	margin: 'auto',
}));

const StyleCollectionProducts = styled('div')(() => ({
	padding: 0,
	margin: 'auto',
}));

const StyleCollectionButton = styled(Button)(({ theme }) => ({
	'&.MuiButton-root': {
		color: theme.colors.fourth,
		backgroundColor: theme.colors.third,
		borderRadius: 0,
		width: '100%',
		fontSize: 12,
		fontFamily: theme.fontFamily.text,
	},
}));

const StyleCollectionImageList = styled(ImageList)(({ theme }) => ({
	'&.MuiImageList-root': {
		overflow: 'hidden',
		margin: '16px 10px',
		justifyContent: 'center',
		'& button': {
			fill: 'white!important',
		},
		'& ul': {
			top: '-5px!important',
		},
		[`@media screen and (min-width: ${theme.breakpoints.md}px)`]: {
			height: 320,
		},
		[`@media screen and (min-width: ${theme.breakpoints.xl}px)`]: {
			height: 480,
		},
	},
}));

const StyledCollectionWrapper = styled('div')(({ theme }) => ({
	maxWidth: theme.breakpoints.xl,
	margin: '30px 6px',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	[`@media screen and (min-width: ${theme.breakpoints.md}px)`]: {
		minHeight: 350,
	},
	[`@media screen and (min-width: ${theme.breakpoints.xl}px)`]: {
		minHeight: 550,
	},
}));

export {
	StyleCollectionImg,
	StyleCollectionProducts,
	StyleCollectionButton,
	StyleCollectionImageList,
	StyledCollectionWrapper,
};
