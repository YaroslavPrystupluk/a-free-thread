import styled from 'styled-components';
import Grid from '@mui/material/Unstable_Grid2';

interface SquareTitleProps {
	isTeam?: boolean;
}

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

const TitleWrapper = styled.div<SquareTitleProps>`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: ${(props) => (props.isTeam ? '60px 0 24px 0' : '67px 0 24px 0')};
	@media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
		margin: ${(props) => (props.isTeam ? '42px 0 32px 0' : '60px 0 32px 0')};
	}
	@media (min-width: ${({ theme }) => `${theme.breakpoints.xl}px`}) {
		margin: ${(props) => (props.isTeam ? '80px 0 40px 0' : '80px 0 37px 0')};
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

const SquareTitle = styled.span<SquareTitleProps>`
	min-width: 28px;
	min-height: 28px;
	position: absolute;
	left: ${(props) => (props.isTeam ? '12%' : '28%')};
	bottom: 60%;
	background: ${({ theme }) => theme.colors.primary};
	opacity: 0.2;
	@media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
		left: ${(props) => (props.isTeam ? '34%' : '40.5%')};
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
	gap: 30px;

	@media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
		max-width: 50%;
		&:nth-child(3) {
			order: 1;
		}
	}
`;
const AboutImage = styled.img`
	max-width: 100%;
`;
const AboutText = styled.p`
	font-family: ${({ theme }) => theme.fontFamily.text}, sans-serif;
	font-size: 12px;
	line-height: 160%;

	@media (min-width: ${({ theme }) => `${theme.breakpoints.xl}px`}) {
	font-size: 18px;
	font-style: normal;
	font-weight: 400;
	line-height: 160%;
`;

export { Container, TitleWrapper, Title, StarIcon, SquareTitle, GridAbout, AboutImage, AboutText };
