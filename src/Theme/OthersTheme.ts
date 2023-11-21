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

const StyleContactsBlock = styled('div')(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	gap: 8,
	[`@media screen and (min-width: ${theme.breakpoints.md}px)`]: {
		gap: 24,
	},
}));

const StyleContactsWrapper = styled('div')(({ theme }) => ({
	maxWidth: theme.breakpoints.xl,
	flexDirection: 'column',
	margin: '24px auto 70px',
	display: 'flex',
	alignItems: 'center',
	[`@media screen and (min-width: ${theme.breakpoints.md}px)`]: {
		margin: '44px auto 100px',
	},
	[`@media screen and (min-width: ${theme.breakpoints.xl}px)`]: {
		margin: '64px auto 140px',
	},
}));

const StyleContactsSpan = styled('span')(({ theme }) => ({
	fontFamily: theme.fontFamily.title,
	fontSize: '1rem',
	fontWeight: 500,
	lineHeight: '22px',
	letterSpacing: '0.32px',
	textTransform: 'uppercase',
	[`@media screen and (min-width: ${theme.breakpoints.md}px)`]: {
		fontSize: '1.25rem',
		letterSpacing: '0.4px',
	},
	[`@media screen and (min-width: ${theme.breakpoints.xl}px)`]: {
		fontSize: '1.5rem',
		letterSpacing: '0.48px',
	},
}));

const StyleContactsParagraph = styled('p')(({ theme }) => ({
	fontFamily: theme.fontFamily.text,
	fontSize: '0.9rem',
	fontWeight: 400,
	lineHeight: '22px',
	letterSpacing: '0.28px',
	[`@media screen and (min-width: ${theme.breakpoints.md}px)`]: {
		fontSize: '1rem',
		lineHeight: '25px',
		letterSpacing: '0.32px',
	},
}));

const StyleImgMap = styled('img')(({ theme }) => ({
	width: 320,
	height: 190,
	objectFit: 'cover',
	[`@media screen and (min-width: ${theme.breakpoints.md}px)`]: {
		width: 770,
		height: 372,
	},
	[`@media screen and (min-width: ${theme.breakpoints.xl}px)`]: {
		width: 1220,
		height: 372,
	},
}));

const StylePosition = styled('div')(({ theme }) => ({
	display: 'flex',
	width: 140,
	height: 40,
	justifyContent: 'center',
	alignItems: 'center',
	position: 'relative',
	top: 100,
	paddingRight: 10,
	borderRadius: 2,
	backgroundColor: theme.colorText.price,
	color: theme.colors.primary,
	fontFamily: theme.fontFamily.text,
	fontSize: '0.75rem',
	fontWeight: 400,
	textTransform: 'uppercase',
	'&::before': {
		content: '" "',
		backgroundColor: theme.colorText.price,
		width: 20,
		height: 20,
		position: 'relative',
		top: 30,
		left: 65,
		transform: 'translate(-50%, -50%) rotate(45deg)',
	},
	[`@media screen and (min-width: ${theme.breakpoints.md}px)`]: {
		fontSize: '0.9rem',
		width: 160,
		height: 56,
		paddingRight: 15,
		top: 170,
		right: 20,
		'&::before': {
			width: 25,
			height: 25,
			top: 40,
			left: 70,
		},
	},
}));

const StyleGrid = styled(Grid)`
	display: flex;
	flex-direction: column !important;
	align-items: center;
	justify-content: center;
	text-align: center;
`;

export {
	StyleGrid,
	StyleGridWrapper,
	StyleTextError,
	StyleContactsSpan,
	StyleContactsParagraph,
	StyleContactsBlock,
	StyleContactsWrapper,
	StyleImgMap,
	StylePosition,
};
