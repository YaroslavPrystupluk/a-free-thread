import styled from 'styled-components';
import ornamentImg from '../../images/icon/ornament.webp';

const SubHeaderWrapper = styled.div`
	display: flex;
	gap: 30px;
	justify-content: center;
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
	min-height: 100%;
	@media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
		min-width: 120px;
	}
	@media (min-width: ${({ theme }) => `${theme.breakpoints.xl}px`}) {
		min-width: 180px;
	}
`;

const ContentWrapper = styled.section`
	@media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-column-gap: 0px;
		grid-row-gap: 0px;
	}
`;

const SubHeaderTitle = styled.p`
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
	line-height: 173%;
	margin: 32px 28px 0 0;
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

const SubHeaderImage = styled.div`
	position: relative;
	margin: 13px 0 0 0;
`;

const ImgSmall = styled.img`
	max-width: 16%;
	height: auto;
	position: absolute;
	top: 60%;
	left: 55%;
	@media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
		max-width: 100%;
	}
`;
const ImgMedium = styled.img`
	max-width: 36%;
	height: auto;
	position: absolute;
	left: 25%;
	top: 25%;
	@media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
		max-width: 100%;
		left: 35%;
		top: 35%;
	}
`;
const ImgBig = styled.img`
	max-width: 45%;
	height: auto;
	@media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
		max-width: 100%;
	}
`;

const SloganWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 12px;
	position: absolute;
	top: -16px;
	left: 70%;
`;

const StarIcon = styled.img`
	max-width: 16px;
`;

const Slogan = styled.span`
	//width: 70px;
	font-family: ${({ theme }) => theme.fontFamily.text}, sans-serif;
	font-size: 10px;
	line-height: 140%;
	letter-spacing: 0.2px;
	text-transform: uppercase;
`;

export {
	SubHeaderWrapper,
	OrnamentWrapper,
	ContentWrapper,
	SubHeaderTitle,
	SubHeaderParagraph,
	SubHeaderImage,
	ImgSmall,
	ImgMedium,
	ImgBig,
	SloganWrapper,
	StarIcon,
	Slogan,
};
