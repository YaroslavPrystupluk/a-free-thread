import { ImageListItemBar } from '@mui/material';
import styled from 'styled-components';

const StyleProductNotFound = styled('div')({
	margin: '10% auto',
	textAlign: 'center',
});

const StyleProductMainImg = styled('img')(() => ({
	width: 204,
	height: 267,
	margin: 'auto',
	objectFit: 'cover',
}));

const StyleProductGallery = styled('div')({
	margin: '24px auto',
	textAlign: 'center',
	display: 'flex',
	maxWidth: 270,
	gap: 12,
});

const StyleProductThumbnails = styled('div')({
	display: 'flex',
	flexDirection: 'column',
	gap: 10,
	maxHeight: 267,
	overflowY: 'auto',
	overflowX: 'hidden',
	'&::-webkit-scrollbar': {
		width: 1,
		color: 'red',
	},
	'&::-webkit-scrollbar-track': {
		background: 'none',
	},
	'& img': {
		width: 52,
		height: 70,
		objectFit: 'cover',
	},
	'& button': {
		border: 'none',
	},
	'& .selected': {
		opacity: 0.5,
	},
});

const StyleProductItemBar = styled(ImageListItemBar)(({ theme }) => ({
	'& .MuiImageListItemBar-titleWrap': {
		display: 'flex',
		flexDirection: 'column-reverse',
		gap: 8,
		padding: 0,
	},
	'& .MuiImageListItemBar-subtitle': {
		fontFamily: theme.fontFamily.title,
		fontSize: 16,
		fontWeight: 500,
		lineHeight: '22px',
		letterSpacing: '0.32px',
		textTransform: 'uppercase',
	},
	'& .MuiImageListItemBar-title': {
		color: theme.colorText.third,
		fontFamily: theme.fontFamily.text,
		fontWeight: 400,
		fontSize: 14,
		lineHeight: 'normal',
	},
}));

const StyleProductSize = styled('div')(({ theme }) => ({
	display: 'flex',
	gap: 5,
	padding: '4px 0px 18px 0',
	color: theme.colors.third,
	fontFamily: theme.fontFamily.text,
	fontSize: 12,
	fontWeight: 400,
	lineHeight: '17px',
	letterSpacing: '0.24px',
}));

const StyleProductWrapper = styled('div')(() => ({
	maxWidth: 270,
	margin: '50px auto',
	display: 'flex',
	flexDirection: 'column',
}));

const StyleProductDescription = styled('div')(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	gap: 12,
	fontWeight: 400,
	lineHeight: 'normal',
	'& .MuiTypography-h4': {
		color: theme.colorText.third,
		fontFamily: theme.fontFamily.text,
		fontSize: 14,
		letterSpacing: '0.28px',
		textTransform: 'uppercase',
		display: 'flex',
		justifyContent: 'space-between',
		'& button': {
			border: 'none',
			backgroundColor: 'transparent',
		},
	},
	'& .MuiTypography-body2': {
		fontSize: 12,
		letterSpacing: '0.24px',
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		'-webkit-line-clamp': '4',
		'-webkit-box-orient': 'vertical',
		display: '-webkit-box',
	},
}));

const StyleProductDescriptionContainer = styled('div')(() => ({
	padding: '6px 0',
	borderBottom: '1px solid rgba(0, 0, 0, 0.20)',
}));

export {
	StyleProductNotFound,
	StyleProductMainImg,
	StyleProductGallery,
	StyleProductThumbnails,
	StyleProductItemBar,
	StyleProductSize,
	StyleProductWrapper,
	StyleProductDescription,
	StyleProductDescriptionContainer,
};
