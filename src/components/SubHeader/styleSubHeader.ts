import styled from 'styled-components';
import ornamentImg from '../../images/icon/ornament.webp';

const SubHeaderWrapper = styled.div`
	display: grid;
	grid-template-columns: minmax(67px, 194px) 68%;
	gap: 30px;
	padding: 16px 0;
	@media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
		grid-template-columns: minmax(120px, 194px) 1fr;
		padding: 20px 0;
	}
	@media (min-width: ${({ theme }) => `${theme.breakpoints.xl}px`}) {
		grid-template-columns: minmax(180px, 194px) 1fr;
		gap: 57px;
		padding: 40px 0 33px 0;
	}
`;

const OrnamentWrapper = styled.section`
	background: url(${ornamentImg}) 0 0 / contain repeat-y;
	height: 100%;
	width: 100%;
	@media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
		//min-width: 120px;
	}
	@media (min-width: ${({ theme }) => `${theme.breakpoints.xl}px`}) {
		//min-width: 194px;
	}
`;

const ContentWrapper = styled.section`
	display: grid;
	grid-template-columns: 1fr;
  @media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
	grid-template-columns: 50% 50%;
`;
const SubHeaderText = styled.div``;
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
	font-weight: 400;
	font-size: 12px;
	line-height: 170%;
	margin: 14px 26px 0 0;
	letter-spacing: 0.5px;
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
	margin: 13px 0 20px 0;
`;

const ImgSmall = styled.img`
	max-width: 17%;
	height: auto;
	position: absolute;
	top: 65%;
	left: 55%;
	@media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
		max-width: 100%;
		//left: 120%;
		//top: 15%;
	}
`;
const ImgMedium = styled.img`
	max-width: 37%;
	height: auto;
	position: absolute;
	left: 25%;
	top: 35%;
	@media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
		max-width: 100%;
	//left: 55%;
	//top: 25%;
	//}
`;
const ImgBig = styled.img`
	max-width: 50%;
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
	left: 67%;
`;

const StarIcon = styled.img`
	max-width: 16px;
`;

const Slogan = styled.span`
	min-width: 70px;
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
	SubHeaderText,
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
