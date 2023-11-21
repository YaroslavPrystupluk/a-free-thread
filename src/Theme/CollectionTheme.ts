import { Button, ImageList } from '@mui/material';
import styled from 'styled-components';

const StyleCollectionImg = styled('img')(({ theme }) => ({
	height: '100%',
	maxHeight: 380,
	width: '90%',
	paddingTop: 12,
	margin: 'auto',
	objectFit: 'cover',
	[`@media screen and (min-width: ${theme.breakpoints.md}px)`]: {
		height: 380,
		width: '49%',
		marginTop: 16,
		paddingRight: 16,
		'&.mainImage_grandmother': {
			paddingLeft: 16,
			paddingRight: 0,
		},
	},
	[`@media screen and (min-width: ${theme.breakpoints.xl}px)`]: {
		height: 560,
		maxHeight: 600,
	},
	'&.mainImage_page': {
		height: 170,
		marginBottom: 8,
		paddingTop: 0,
		[`@media screen and (min-width: ${theme.breakpoints.md}px)`]: {
			height: 200,
			width: 340,
			margin: 0,
			padding: 0,
		},
		[`@media screen and (min-width: ${theme.breakpoints.xl}px)`]: {
			height: 340,
			width: 550,
		},
	},
}));

const StyleCollectionProducts = styled('div')(({ theme }) => ({
	padding: 0,
	margin: 'auto',
	width: '100%',
	'&.collectionPage': {
		width: '95%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	[`@media screen and (min-width: ${theme.breakpoints.md}px)`]: {
		width: '51%',
	},
}));

const StyleCollectionButton = styled(Button)(({ theme }) => ({
	'&.MuiButton-root': {
		color: theme.colors.fourth,
		backgroundColor: theme.colors.third,
		borderRadius: 0,
		width: '90%',
		fontSize: '0.75rem',
		fontFamily: theme.fontFamily.text,
		display: 'flex',
		height: 44,
		padding: '16px 0px',
		justifyContent: 'center',
		alignItems: 'center',
		margin: 'auto',
		gap: 24,
		lineHeight: 16,
		letterSpacing: 0.24,
		fontWeight: 400,
		'&.MuiButton-root:hover': {
			color: theme.colorText.third,
			backgroundColor: theme.colors.primary,
		},
		[`@media screen and (min-width: ${theme.breakpoints.md}px)`]: {
			width: '95%',
		},
		[`@media screen and (min-width: ${theme.breakpoints.xl}px)`]: {
			height: 62,
			width: 552,
			marginTop: 20,
			fontSize: '1rem',
			lineHeight: '22px',
			letterSpacing: 0.32,
		},
	},
}));

const StyleCollectionImageList = styled(ImageList)(({ theme }) => ({
	'&.MuiImageList-root': {
		overflow: 'hidden',
		display: 'flex',
		margin: '16px auto',
		height: 270,
		flexWrap: 'wrap',
		justifyContent: 'center',
		'& button': {
			fill: 'white!important',
		},
		'& ul': {
			top: '-5px!important',
		},
		[`@media screen and (min-width: ${theme.breakpoints.sm}px)`]: {
			height: 310,
		},
		[`@media screen and (min-width: ${theme.breakpoints.md}px)`]: {
			height: 320,
			justifyContent: 'space-evenly',
		},
		[`@media screen and (min-width: ${theme.breakpoints.xl}px)`]: {
			height: 480,
		},
	},
}));

const StyledCollectionWrapper = styled('div')(({ theme }) => ({
	maxWidth: theme.breakpoints.xl,
	width: '95%',
	margin: '60px auto',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	[`@media screen and (min-width: ${theme.breakpoints.sm}px)`]: {
		width: '85%',
	},
	[`@media screen and (min-width: ${theme.breakpoints.md}px)`]: {
		minHeight: 350,
	},
	'&.collectionPage': {
		margin: '24px auto',
		[`@media screen and (min-width: ${theme.breakpoints.md}px)`]: {
			maxWidth: 700,
		},
		[`@media screen and (min-width: ${theme.breakpoints.xl}px)`]: {
			maxWidth: theme.breakpoints.xsl,
		},
	},
}));

const StyleCollectionImageWrapper = styled('div')(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	width: '100%',
	'&.contacts_text-block': {
		gap: 32,
		margin: '16px auto 32px',
		width: '100%',
		[`@media screen and (min-width: ${theme.breakpoints.md}px)`]: {
			width: 700,
			flexDirection: 'row',
			justifyContent: 'center',
			margin: '24px auto 60px',
		},
		[`@media screen and (min-width: ${theme.breakpoints.xl}px)`]: {
			width: theme.breakpoints.xsl,
			justifyContent: 'space-between',
			margin: '56px auto 90px',
		},
	},
	[`@media screen and (min-width: ${theme.breakpoints.md}px)`]: {
		gap: 10,
		flexDirection: 'row-reverse',
		'&.wrapper_grandmother': {
			flexDirection: 'row',
		},
		'&.collectionPageMain': {
			flexDirection: 'row',
			justifyContent: 'center',
			alignItems: 'center',
			gap: 20,
			padding: '0 10px 32px',
			[`@media screen and (min-width: ${theme.breakpoints.md}px)`]: {
				padding: '0 10px 32px',
			},
			[`@media screen and (min-width: ${theme.breakpoints.xl}px)`]: {
				gap: 24,
				marginBottom: 60,
				padding: '0 10px 60px',
			},
		},
	},
}));

export {
	StyleCollectionImg,
	StyleCollectionProducts,
	StyleCollectionButton,
	StyleCollectionImageList,
	StyledCollectionWrapper,
	StyleCollectionImageWrapper,
};
