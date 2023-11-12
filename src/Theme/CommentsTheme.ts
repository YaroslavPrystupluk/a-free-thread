import styled from 'styled-components';

const Container = styled.article`
	max-width: ${({ theme }) => `${theme.breakpoints.xs}px`};
	margin: 0 auto;
	padding: 0 26px;
	@media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
		max-width: ${({ theme }) => `${theme.breakpoints.md}px`};
	}
	@media (min-width: ${({ theme }) => `${theme.breakpoints.xl}px`}) {
		max-width: ${({ theme }) => `${theme.breakpoints.xl}px`};
	}
`;

const TitleWrapper = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 40px 0 24px 0;
	@media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
		margin: 60px 0 32px 0;
	}
	@media (min-width: ${({ theme }) => `${theme.breakpoints.xl}px`}) {
		margin: 80px 0 40px 0;
	}
`;

const Title = styled.h1`
	font-family: ${({ theme }) => theme.fontFamily.title}, sans-serif;
	font-size: 20px;
	font-style: normal;
	font-weight: 500;
	line-height: 160%;
	letter-spacing: 0.4px;
	text-transform: uppercase;
	@media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
		font-size: 24px;
		letter-spacing: 0.48px;
	}
	@media (min-width: ${({ theme }) => `${theme.breakpoints.xl}px`}) {
		font-size: 40px;
		letter-spacing: 0.8px;
	}
`;

const StarIcon = styled.img`
	max-width: 16px;
	position: absolute;
	bottom: 65%;
	left: 65%;
	@media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
		max-width: 20px;
		left: 57%;
	}
	@media (min-width: ${({ theme }) => `${theme.breakpoints.xl}px`}) {
		max-width: 24px;
		left: 58%;
	}
`;

const SquareTitle = styled.span`
	min-width: 28px;
	min-height: 28px;
	position: absolute;
	left: 27%;
	bottom: 60%;
	background: ${({ theme }) => theme.colors.primary};
	opacity: 0.2;
	@media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
		left: 40%;
	}
	@media (min-width: ${({ theme }) => `${theme.breakpoints.xl}px`}) {
		min-width: 40px;
		min-height: 40px;
		left: 41%;
	}
`;

const CardsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
	padding: 0 0 40px 0;
	@media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
		gap: 24px;
		padding: 0 0 60px 0;
	}
	@media (min-width: ${({ theme }) => `${theme.breakpoints.xl}px`}) {
		gap: 40px;
		padding: 0 0 80px 0;
	}
`;

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
	left: '15%',
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
		left: '35%',
	},
	[`@media screen and (min-width: ${theme.breakpoints.xl}px)`]: {
		width: 230,
		left: '40%',
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

export {
	Container,
	TitleWrapper,
	Title,
	StarIcon,
	SquareTitle,
	CardsWrapper,
	StylePaginationBox,
	StylePaginationButton,
};
