import styled from 'styled-components';
import ornamentImg from '../../images/icon/ornament.webp';

const SubHeaderWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 3fr;
	//grid-auto-rows: auto;
	grid-template-rows: auto;
	padding: 16px 0;
	column-gap: 30px;
	@media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
		grid-template-columns: 1fr 2fr 3fr;
		padding: 20px 0;
		column-gap: 0;
		align-items: end;
	}
	@media (min-width: ${({ theme }) => `${theme.breakpoints.xl}px`}) {
		//grid-template-columns: 1fr 2fr 3fr;
		padding: 40px 0 33px 0;
	}
`;

const OrnamentWrapper = styled.section`
	background: url(${ornamentImg}) 0 0 / contain repeat-y;
	height: 100%;
	width: 100%;
	grid-row: 1 / 3;
`;

const SubHeaderText = styled.div`
	@media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
		margin: 30px 21px 0 30px;
		grid-row: 1 / 3;
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
	font-weight: 400;
	font-size: 12px;
	line-height: 170%;
	margin: 14px 26px 0 0;
	letter-spacing: 0.5px;
	@media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
		font-size: 14px;
		line-height: 157%;
		letter-spacing: 0.2px;
	}
	@media (min-width: ${({ theme }) => `${theme.breakpoints.xl}px`}) {
		font-size: 16px;
		letter-spacing: 0.32px;
	}
`;

const SubHeaderImage = styled.div`
	position: relative;
	margin: 13px 0 27px 0;
	@media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
		grid-row: 1 / 3;
	}
`;

const ImgSmall = styled.img`
	max-width: 17%;
	position: absolute;
	top: 65%;
	left: 55%;
	@media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
		max-width: 100%;
		top: 20%;
		left: 70%;
	}
	@media (min-width: ${({ theme }) => `${theme.breakpoints.xl}px`}) {
		display: none;
	}
`;
const ImgMedium = styled.img`
	max-width: 37%;
	position: absolute;
	left: 25%;
	top: 35%;
	@media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
		max-width: 100%;
		position: absolute;
		left: 33%;
		top: 33%;
	}
	@media (min-width: ${({ theme }) => `${theme.breakpoints.xl}px`}) {
		display: none;
	}
`;
const ImgBig = styled.img`
	max-width: 50%;
	@media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
		max-width: 100%;
	}
	@media (min-width: ${({ theme }) => `${theme.breakpoints.xl}px`}) {
		display: none;
	}
`;

const SloganWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 12px;
	position: absolute;
	top: -16px;
	left: 67%;
	@media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
		top: 60%;
		left: 79%;
	}
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

const SloganWrapperTop = styled.div`
	display: none;
	@media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
		display: flex;
		flex-direction: column;
		gap: 12px;
		position: absolute;
		top: -5%;
		left: 67%;
	}
`;

const SloganWrapperEnd = styled.div`
	display: none;
	@media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
		display: flex;
		flex-direction: column;
		gap: 12px;
		position: absolute;
		bottom: 6%;
		right: 1%;
	}
`;

const ImgDesktopSmall = styled.img`
	display: none;
	@media (min-width: ${({ theme }) => `${theme.breakpoints.xl}px`}) {
		display: block;
		position: absolute;
		top: 0;
	}
`;
const ImgDesktopMedium = styled.img`
	display: none;
	@media (min-width: ${({ theme }) => `${theme.breakpoints.xl}px`}) {
		display: block;
		position: absolute;
		top: 0;
	}
`;
const ImgDesktopBig = styled.img`
	display: none;
	@media (min-width: ${({ theme }) => `${theme.breakpoints.xl}px`}) {
		display: block;
	}
`;

export {
	SubHeaderWrapper,
	OrnamentWrapper,
	SubHeaderText,
	SubHeaderTitle,
	SubHeaderParagraph,
	SubHeaderImage,
	ImgSmall,
	ImgMedium,
	ImgBig,
	ImgDesktopSmall,
	ImgDesktopMedium,
	ImgDesktopBig,
	SloganWrapper,
	StarIcon,
	Slogan,
	SloganWrapperTop,
	SloganWrapperEnd,
};
