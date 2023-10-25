import styled from 'styled-components';
import ornamentImg from '../../images/icon/ornament.webp';

const SubHeaderWrapper = styled.div`
	display: flex;
	gap: 30px;
	justify-content: center;
	align-items: center;
`;

const OrnamentWrapper = styled.section`
	background-image: url(${ornamentImg});
	background-repeat: repeat;
	min-width: 67px;
	min-height: 200px;
	background-size: auto 100%;
`;

const Ornament = styled.img`
	width: 100%;
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

export { SubHeaderWrapper, OrnamentWrapper, Ornament, SubHeaderTitle, SubHeaderParagraph };
