import star from '../../images/icon/star.webp';
import imgSubHeaderSmall from '../../images/Others/others_5.webp';
import imgSubHeaderMedium from '../../images/Others/others_6.webp';
import imgSubHeaderBig from '../../images/Others/others_7.webp';
import imgDesktopSubHeaderSmall from '../../images/Others/others_8.webp';
import imgDesktopSubHeaderMedium from '../../images/Others/others_9.webp';
import imgDesktopSubHeaderBig from '../../images/Others/others_10.webp';

import {
	Container,
	SubHeaderWrapper,
	OrnamentWrapper,
	SubHeaderText,
	SubHeaderTitle,
	SubHeaderParagraph,
	SubHeaderImage,
	WrapperGrid,
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
} from '../../Theme/SubHeaderTheme';

const SubHeader = () => {
	return (
		<Container>
			<SubHeaderWrapper>
				<OrnamentWrapper />
				<SubHeaderText>
					<SubHeaderTitle>Вільна нитка</SubHeaderTitle>
					<SubHeaderParagraph>
						Ми виробляємо етнічний одяг, сорочки, за індивідуальним замовленням, який ми відшиваємо
						і вишиваємо за власним дизайном і кроєм. Маємо власну колекцію сорочок з кожного регіону
						України.
					</SubHeaderParagraph>
				</SubHeaderText>
				<SubHeaderImage>
					<WrapperGrid>
						<ImgBig src={imgSubHeaderBig} alt="ornament" />
						<ImgMedium src={imgSubHeaderMedium} alt="ornament" />
						<ImgSmall src={imgSubHeaderSmall} alt="ornament" />
						<ImgDesktopBig src={imgDesktopSubHeaderBig} alt="ornament" />
						<ImgDesktopMedium src={imgDesktopSubHeaderMedium} alt="ornament" />
						<ImgDesktopSmall src={imgDesktopSubHeaderSmall} alt="ornament" />
						<SloganWrapper>
							<StarIcon src={star} alt="star icon" />
							<Slogan>віднови вишиванку своєї бабусі.</Slogan>
						</SloganWrapper>
						<SloganWrapperTop>
							<StarIcon src={star} alt="star icon" />
							<Slogan>Створюємо речі сили сильними жінками.</Slogan>
						</SloganWrapperTop>
						<SloganWrapperEnd>
							<Slogan>Час бути вільною.</Slogan>
						</SloganWrapperEnd>
					</WrapperGrid>
				</SubHeaderImage>
			</SubHeaderWrapper>
		</Container>
	);
};

export default SubHeader;
