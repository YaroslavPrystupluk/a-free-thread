import styled from 'styled-components';
import { ImageList, ImageListItem, ImageListItemBar, Typography, Container } from '@mui/material';

const StyleImageList = styled(ImageList)(({ theme }) => ({
	'&.MuiImageList-root': {
		display: 'flex',
		overflow: 'hidden',
		justifyContent: 'center',
		maxHeight: 520,
		flexWrap: 'wrap',
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
		[`@media screen and (min-width: ${theme.breakpoints.sm}px)`]: {
			maxHeight: 630,
		},
		[`@media screen and (min-width: ${theme.breakpoints.mdm}px)`]: {
			height: 310,
		},
		[`@media screen and (min-width: ${theme.breakpoints.md}px)`]: {
			height: 320,
		},
		[`@media screen and (min-width: ${theme.breakpoints.xl}px)`]: {
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
			whiteSpace: 'wrap',
			[`@media screen and (min-width: ${theme.breakpoints.md}px)`]: {
				fontSize: '0.9rem',
			},
			[`@media screen and (min-width: ${theme.breakpoints.xl}px)`]: {
				fontSize: '1rem',
			},
		},
		'& .MuiImageListItemBar-title': {
			color: theme.colorText.price,
			fontWeight: 400,
			marginBottom: 6,
			fontSize: '0.7rem',
			letterSpacing: 0.24,
			[`@media screen and (min-width: ${theme.breakpoints.md}px)`]: {
				fontSize: '1rem',
			},
			[`@media screen and (min-width: ${theme.breakpoints.xl}px)`]: {
				fontSize: '1.25rem',
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
				fontSize: '0.75rem',
			},
			[`@media screen and (min-width: ${theme.breakpoints.xl}px)`]: {
				fontSize: '0.9rem',
			},
		},
		'& .MuiImageListItemBar-titleWrap': {
			padding: 0,
		},
	},
}));

const StyleImageListItem = styled(ImageListItem)(({ theme }) => ({
	width: '43%',
	margin: '13px 10px',
	border: '1px solid #F5F5F5',
	boxShadow: `
	  0px 0px 0.91935px 0px rgba(0, 0, 0, 0.04),
	  0px 1.83871px 1.83871px 0px rgba(0, 0, 0, 0.04),
	  0px 3.67742px 1.83871px 0px rgba(0, 0, 0, 0.02),
	  0px 5.51613px 2.75806px 0px rgba(0, 0, 0, 0.01),
	  0px 9.19355px 2.75806px 0px rgba(0, 0, 0, 0.00)`,
	'& .slider-container': {
		height: '100%',
	},
	[`@media screen and (min-width: ${theme.breakpoints.mdm}px)`]: {
		width: '27%',
	},
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
		fontSize: '1.25rem',
		fontWeight: 500,
		lineHeight: '32px',
		letterSpacing: 0.4,
		textTransform: 'uppercase',
		margin: '16px auto',
		textAlign: 'center',
		maxWidth: theme.breakpoints.xsl,
		width: '100%',
		'&.product': {
			width: '100%',
			whiteSpace: 'nowrap',
			display: 'flex',
			justifyContent: 'center',
			padding: '44px 0 16px',
			position: 'relative',
			right: 16,
		},
		[`@media screen and (min-width: ${theme.breakpoints.md}px)`]: {
			fontSize: '1.5rem',
			letterSpacing: 0.48,
		},
		[`@media screen and (min-width: ${theme.breakpoints.xl}px)`]: {
			fontSize: '2.5rem',
			letterSpacing: 0.8,
		},
		'&.collectionPageTitle': {
			width: '100%',
		},
	},
	'&.MuiTypography-body1': {
		width: '90%',
		fontFamily: theme.fontFamily.text,
		fontSize: '0.75rem',
		fontWeight: 400,
		lineHeight: '20px',
		letterSpacing: 0.24,
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		'-webkit-line-clamp': '7',
		'-webkit-box-orient': 'vertical',
		display: '-webkit-box',
		[`@media screen and (min-width: ${theme.breakpoints.md}px)`]: {
			width: '95%',
			'-webkit-line-clamp': '3',
		},
		[`@media screen and (min-width: ${theme.breakpoints.xl}px)`]: {
			fontSize: '0.9rem',
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
	width: '100%',
	height: 180,
	objectFit: 'cover',
	objectPosition: 'center',
	[`@media screen and (min-width: ${theme.breakpoints.sm}px)`]: {
		height: 230,
	},
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
	minHeight: 320,
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
