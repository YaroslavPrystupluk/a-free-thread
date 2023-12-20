import { useTranslation } from 'react-i18next';
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
	const { t } = useTranslation();

	return (
		<Container>
			<SubHeaderWrapper>
				<OrnamentWrapper />
				<SubHeaderText>
					<SubHeaderTitle>{t('sub.header.title')}</SubHeaderTitle>
					<SubHeaderParagraph>{t('sub.header.description')}</SubHeaderParagraph>
				</SubHeaderText>
				<SubHeaderImage>
					<WrapperGrid>
						<ImgBig src={imgSubHeaderBig} alt="ornament" />
						<ImgMedium src={imgSubHeaderMedium} alt="ornament" />
						<ImgSmall src={imgSubHeaderSmall} alt="ornament" />
						<ImgDesktopBig src={imgDesktopSubHeaderBig} alt="ornament" />
						<ImgDesktopMedium src={imgDesktopSubHeaderMedium} alt="ornament" />
						<ImgDesktopSmall src={imgDesktopSubHeaderSmall} alt="ornament" />
						<SloganWrapperTop>
							<StarIcon src={star} alt="star icon" />
							<Slogan>{t('sub.header.slogan.first')}</Slogan>
						</SloganWrapperTop>
						<SloganWrapper>
							<StarIcon src={star} alt="star icon" />
							<Slogan>{t('sub.header.slogan.second')}</Slogan>
						</SloganWrapper>
						<SloganWrapperEnd>
							<Slogan>{t('sub.header.slogan.third')}.</Slogan>
						</SloganWrapperEnd>
					</WrapperGrid>
				</SubHeaderImage>
			</SubHeaderWrapper>
		</Container>
	);
};

export default SubHeader;
