import styled from 'styled-components';
import Grid from '@mui/material/Unstable_Grid2';

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
	margin: 67px 0 24px 0;
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
	left: 28%;
	bottom: 60%;
	background: ${({ theme }) => theme.colors.primary};
	opacity: 0.2;
	@media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
		left: 40.5%;
	}
	@media (min-width: ${({ theme }) => `${theme.breakpoints.xl}px`}) {
		min-width: 40px;
		min-height: 40px;
		bottom: 50%;
	}
`;

const GridAbout = styled(Grid)`
	display: flex;
	flex-direction: column;
	&:nth-child(3) {
		margin: 32px 0 0 0;
	}
	@media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
		max-width: 50%;
		&:nth-child(3) {
			margin: 0;
			order: 1;
		}
	}
`;
const AboutImage = styled.img`
	max-width: 100%;
	margin: 0 0 32px 0;
	@media (min-width: ${({ theme }) => `${theme.breakpoints.sm}px`}) {
		margin: 0;
	}
`;
const AboutText = styled.p`
	font-family: ${({ theme }) => theme.fontFamily.text}, sans-serif;
	font-size: 12px;
	line-height: 160%;
	&:not(:last-child) {
		padding: 0 0 25px 0;
	}
`;

export { Container, TitleWrapper, Title, StarIcon, SquareTitle, GridAbout, AboutImage, AboutText };
