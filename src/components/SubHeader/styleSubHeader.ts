import styled from 'styled-components';
import ornamentImg from '../../images/icon/ornament.webp';

const SubHeaderWrapper = styled.div`
	display: flex;
	gap: 30px;
	justify-content: center;
	align-items: center;
	padding: 16px 0;
	@media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
		padding: 20px 0;
	}
	@media (min-width: ${({ theme }) => `${theme.breakpoints.xl}px`}) {
		gap: 57px;
		padding: 40px 0 33px 0;
	}
`;

const OrnamentWrapper = styled.section`
	background: url(${ornamentImg}) 0 0 / contain repeat-y;
	min-width: 67px;
	min-height: 437px;
	@media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
		min-width: 120px;
		min-height: 360px;
	}
	@media (min-width: ${({ theme }) => `${theme.breakpoints.xl}px`}) {
		min-width: 180px;
		min-height: 540px;
	}
`;

const SubHeaderTitle = styled.h1`
	font-family: ${({ theme }) => theme.fontFamily.title}, sans-serif;
	font-size: 40px;
	font-weight: 500;
	letter-spacing: 0.8px;
	text-transform: uppercase;
	@media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
		font-size: 56px;
	}
	@media (min-width: ${({ theme }) => `${theme.breakpoints.xl}px`}) {
		font-size: 90px;
	}
`;
const SubHeaderParagraph = styled.p`
	font-family: ${({ theme }) => theme.fontFamily.text}, sans-serif;
	font-size: 12px;
	line-height: 160%;
	letter-spacing: 0.24px;
	@media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
		font-size: 14px;
		line-height: 160%;
		letter-spacing: 0.28px;
	}
	@media (min-width: ${({ theme }) => `${theme.breakpoints.xl}px`}) {
		font-size: 16px;
		letter-spacing: 0.32px;
	}
`;

export { SubHeaderWrapper, OrnamentWrapper, SubHeaderTitle, SubHeaderParagraph };
