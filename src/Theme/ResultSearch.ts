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
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 67px 0 24px 0;
	@media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
		margin: 60px 0 30px 0;
	}
	@media (min-width: ${({ theme }) => `${theme.breakpoints.xl}px`}) {
		margin: 80px 0 40px 0;
	}
`;

const Title = styled.h1`
	position: relative;
	font-family: ${({ theme }) => theme.fontFamily.title}, sans-serif;
	font-size: 22px;
	font-style: normal;
	font-weight: 500;
	line-height: 160%;
	letter-spacing: 0.3px;
	text-transform: uppercase;
	text-align: center;
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
	top: -2%;
	right: -3%;
	@media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
		max-width: 20px;
		top: -2%;
		right: -6%;
	}
	@media (min-width: ${({ theme }) => `${theme.breakpoints.xl}px`}) {
		max-width: 24px;
		top: -2%;
		right: -3%;
	}
`;

const SquareTitle = styled.span`
	min-width: 28px;
	min-height: 28px;
	position: absolute;
	left: -2%;
	bottom: 75%;
	background: ${({ theme }) => theme.colors.primary};
	opacity: 0.2;
	@media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
		left: -2%;
		bottom: 50%;
	}
	@media (min-width: ${({ theme }) => `${theme.breakpoints.xl}px`}) {
		min-width: 40px;
		min-height: 40px;
		left: -2%;
		bottom: 50%;
	}
`;

export { Container, TitleWrapper, Title, StarIcon, SquareTitle };
