import { Button, ImageList } from '@mui/material';
import styled from 'styled-components';

const StyleCollectionImg = styled('img')(({ theme }) => ({
	height: 250,
	width: 260,
	paddingTop: 12,
	margin: 'auto',
	objectFit: 'cover',
	[`@media screen and (min-width: ${theme.breakpoints.md}px)`]: {
		height: 380,
		width: 350,
		marginTop: 16,
		paddingRight: 16,
		'&.mainImage_grandmother': {
			paddingLeft: 16,
		},
	},
	[`@media screen and (min-width: ${theme.breakpoints.xl}px)`]: {
		height: 560,
		width: 560,
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

const StyleCollectionProducts = styled('div')(() => ({
	padding: 0,
	margin: 'auto',
}));

const StyleCollectionButton = styled(Button)(({ theme }) => ({
	'&.MuiButton-root': {
		color: theme.colors.fourth,
		backgroundColor: theme.colors.third,
		borderRadius: 0,
		width: '90%',
		fontSize: 12,
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
		[`@media screen and (min-width: ${theme.breakpoints.xl}px)`]: {
			height: 62,
			width: 552,
			marginTop: 20,
			fontSize: 16,
			lineHeight: 22,
			letterSpacing: 0.32,
		},
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
	maxWidth: theme.breakpoints.xs,
	margin: '60px auto',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	[`@media screen and (min-width: ${theme.breakpoints.md}px)`]: {
		minHeight: 350,
		maxWidth: theme.breakpoints.md,
	},
	[`@media screen and (min-width: ${theme.breakpoints.xl}px)`]: {
		maxWidth: theme.breakpoints.xsl,
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
	'&.contacts_text-block': {
		gap: 32,
		margin: '16px auto 32px',
		width: 270,
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
		flexDirection: 'row-reverse',
		'&.wrapper_grandmother': {
			flexDirection: 'row',
		},
		'&.collectionPageMain': {
			flexDirection: 'row',
			justifyContent: 'center',
			alignItems: 'center',
			gap: 20,
			padding: '0 10px',
			[`@media screen and (min-width: ${theme.breakpoints.xl}px)`]: {
				gap: 24,
				marginBottom: 60,
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
