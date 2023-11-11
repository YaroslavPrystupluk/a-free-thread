import styled from 'styled-components';
import { ImageList, ImageListItem, ImageListItemBar, Typography, Container } from '@mui/material';

const StyleImageList = styled(ImageList)(({ theme }) => ({
	'&.MuiImageList-root': {
		overflow: 'hidden',
		gridTemplateColumns: 'repeat(2, 144px)!important',
		justifyContent: 'center',
		'& button': {
			fill: 'white!important',
			padding: 2,
		},
		'& ul': {
			top: '-5px!important',
		},
		'& svg': {
			[`@media screen and (min-width: ${theme.breakpoints.xl}px)`]: {
				height: 10,
				width: 10,
			},
		},
		[`@media screen and (min-width: ${theme.breakpoints.md}px)`]: {
			gridTemplateColumns: 'repeat(4, 180px)!important',
			height: 320,
		},
		[`@media screen and (min-width: ${theme.breakpoints.xl}px)`]: {
			gridTemplateColumns: 'repeat(4, 1fr)!important',
			height: 480,
		},
		'&.collectionPage': {
			[`@media screen and (min-width: ${theme.breakpoints.md}px)`]: {
				margin: '16px 0',
			},
			[`@media screen and (min-width: ${theme.breakpoints.md}px)`]: {
				height: 'auto',
			},
			'& .MuiPagination-ul svg': {
				'& button': {
					padding: 0,
					width: 34,
					[`@media screen and (min-width: ${theme.breakpoints.md}px)`]: {
						width: 60,
					},
				},
			},
		},
	},
}));

const StyleImageListItemBar = styled(ImageListItemBar)(({ theme }) => ({
	'&.MuiImageListItemBar-root': {
		fontFamily: theme.fontFamily.text,
		margin: 8,
		fontWeight: 400,
		[`@media screen and (min-width: ${theme.breakpoints.md}px)`]: {
			margin: '12px 16px',
		},
		'& .MuiImageListItemBar-titleWrap': {
			textAlign: 'left',
			padding: 0,
			overflow: 'inherit',
		},
		'& .MuiImageListItemBar-subtitle': {
			lineHeight: 'normal',
			whiteSpace: 'wrap',
			[`@media screen and (min-width: ${theme.breakpoints.md}px)`]: {
				fontSize: 14,
			},
			[`@media screen and (min-width: ${theme.breakpoints.xl}px)`]: {
				fontSize: 16,
			},
		},
		'& .MuiImageListItemBar-title': {
			color: theme.colorText.price,
			fontWeight: 400,
			marginBottom: 6,
			fontSize: 11,
			lineHeight: 'normal',
			letterSpacing: 0.24,
			[`@media screen and (min-width: ${theme.breakpoints.md}px)`]: {
				fontSize: 16,
			},
			[`@media screen and (min-width: ${theme.breakpoints.xl}px)`]: {
				fontSize: 20,
			},
		},
	},
}));

const StyleImageListItemBadge = styled(ImageListItemBar)(({ theme }) => ({
	'&.MuiImageListItemBar-root': {
		padding: '4px 6px',
		height: 20,
		top: 8,
		right: 'auto',
		background: 'rgba(255, 255, 255, 0.70)',
		'&.last': {
			display: 'none',
		},
		[`@media screen and (min-width: ${theme.breakpoints.md}px)`]: {
			top: 12,
			height: 25,
			padding: '6px 12px',
		},
		[`@media screen and (min-width: ${theme.breakpoints.xl}px)`]: {
			top: 24,
			height: 32,
			padding: '8px 16px',
		},
		'& .MuiImageListItemBar-title': {
			padding: 0,
			color: theme.colorText.primary,
			fontFamily: theme.fontFamily.text,
			fontSize: 10,
			fontWeight: 400,
			textTransform: 'capitalize',
			display: 'inline-flex',
			[`@media screen and (min-width: ${theme.breakpoints.md}px)`]: {
				fontSize: 12,
			},
			[`@media screen and (min-width: ${theme.breakpoints.xl}px)`]: {
				fontSize: 14,
			},
		},
		'& .MuiImageListItemBar-titleWrap': {
			padding: 0,
		},
	},
}));

const StyleImageListItem = styled(ImageListItem)(({ theme }) => ({
	width: 124,
	margin: '13px 10px',
	border: '1px solid #F5F5F5',
	boxShadow: `
	  0px 0px 0.91935px 0px rgba(0, 0, 0, 0.04),
	  0px 1.83871px 1.83871px 0px rgba(0, 0, 0, 0.04),
	  0px 3.67742px 1.83871px 0px rgba(0, 0, 0, 0.02),
	  0px 5.51613px 2.75806px 0px rgba(0, 0, 0, 0.01),
	  0px 9.19355px 2.75806px 0px rgba(0, 0, 0, 0.00)`,
	[`@media screen and (min-width: ${theme.breakpoints.md}px)`]: {
		width: 162,
	},
	[`@media screen and (min-width: ${theme.breakpoints.xl}px)`]: {
		width: 265,
	},
}));

const StyleTypography = styled(Typography)(({ theme }) => ({
	'&.MuiTypography-h4': {
		fontFamily: theme.fontFamily.title,
		fontSize: 20,
		fontWeight: 500,
		lineHeight: '32px',
		letterSpacing: 0.4,
		textTransform: 'uppercase',
		margin: '16px auto',
		textAlign: 'center',
		maxWidth: theme.breakpoints.xsl,
		width: '85%',
		'&.product': {
			width: '100%',
			whiteSpace: 'nowrap',
		},
		[`@media screen and (min-width: ${theme.breakpoints.md}px)`]: {
			fontSize: 24,
			letterSpacing: 0.48,
		},
		[`@media screen and (min-width: ${theme.breakpoints.xl}px)`]: {
			fontSize: 40,
			letterSpacing: 0.8,
		},
		'&.collectionPageTitle': {
			width: '100%',
		},
	},
	'&.MuiTypography-body1': {
		width: '85%',
		fontFamily: theme.fontFamily.text,
		fontSize: 12,
		fontWeight: 400,
		lineHeight: '20px',
		letterSpacing: 0.24,
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		'-webkit-line-clamp': '7',
		'-webkit-box-orient': 'vertical',
		display: '-webkit-box',
		[`@media screen and (min-width: ${theme.breakpoints.md}px)`]: {
			width: '90%',
			'-webkit-line-clamp': '3',
		},
		[`@media screen and (min-width: ${theme.breakpoints.xl}px)`]: {
			fontSize: 14,
			letterSpacing: 0.28,
			lineHeight: '24px',
		},
		'&.collectionPageSpan': {
			'-webkit-line-clamp': '20',
			margin: 'auto',
			width: '100%',
			[`@media screen and (min-width: ${theme.breakpoints.md}px)`]: {
				'-webkit-line-clamp': '12',
			},
		},
	},
}));

const StyleSlideImg = styled('img')(({ theme }) => ({
	height: 180,
	width: 124,
	[`@media screen and (min-width: ${theme.breakpoints.md}px)`]: {
		height: 230,
		width: 162,
	},
	[`@media screen and (min-width: ${theme.breakpoints.xl}px)`]: {
		height: 380,
		width: 265,
	},
}));

const StyleHitsWrapper = styled(Container)(({ theme }) => ({
	maxWidth: theme.breakpoints.xsl,
	margin: '30px auto',
	minHeight: 550,
	textAlign: 'center',
	'&.product': {
		margin: 0,
	},
	[`@media screen and (min-width: ${theme.breakpoints.md}px)`]: {
		minHeight: 350,
	},
	[`@media screen and (min-width: ${theme.breakpoints.xl}px)`]: {
		minHeight: 550,
		'&.product': {
			margin: '40px auto',
		},
	},
}));

export {
	StyleImageList,
	StyleImageListItemBar,
	StyleImageListItem,
	StyleTypography,
	StyleImageListItemBadge,
	StyleSlideImg,
	StyleHitsWrapper,
};
