import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import {
	Container,
	TitleWrapper,
	TitlePage,
	StarIcon,
	SquareTitle,
	Content,
	TitleContent,
	ContentList,
	CustomList,
	CustomListItem,
	CustomListItemIcon,
	CustomDoneIcon,
	CustomListItemText,
	ContentText,
	TextWrapper,
	Text,
} from '../../Theme/DeliveryAndPai';
import star from '../../images/icon/star.webp';

const DeliveryAndPai: FC = () => {
	const { t } = useTranslation();

	return (
		<Container>
			<TitleWrapper>
				<SquareTitle />
				<TitlePage>{t('delivery.title')}</TitlePage>
				<StarIcon src={star} alt="star" />
			</TitleWrapper>
			<Content>
				<ContentList>
					<TitleContent $isTitle>{t('delivery.data.product')}</TitleContent>
					<CustomList>
						<CustomListItem>
							<CustomListItemIcon>
								<CustomDoneIcon />
							</CustomListItemIcon>
							<CustomListItemText>{t('delivery.data.product.size')}</CustomListItemText>
						</CustomListItem>
						<CustomListItem>
							<CustomListItemIcon>
								<CustomDoneIcon />
							</CustomListItemIcon>
							<CustomListItemText>{t('delivery.data.product.phone')}</CustomListItemText>
						</CustomListItem>
						<CustomListItem>
							<CustomListItemIcon>
								<CustomDoneIcon />
							</CustomListItemIcon>
							<CustomListItemText>{t('delivery.data.product.address')}</CustomListItemText>
						</CustomListItem>
						<CustomListItem>
							<CustomListItemIcon>
								<CustomDoneIcon />
							</CustomListItemIcon>
							<CustomListItemText>{t('delivery.data.product.bill')}</CustomListItemText>
						</CustomListItem>
					</CustomList>
				</ContentList>
				<ContentText>
					<TextWrapper>
						<TitleContent $isTitle={false}>{t('delivery.data.way.ukraine.title')}</TitleContent>
						<Text>{t('delivery.data.way.ukraine')}</Text>
					</TextWrapper>
					<TextWrapper>
						<TitleContent $isTitle={false}>{t('delivery.data.way.world.title')}</TitleContent>
						<Text>{t('delivery.data.way.world')}</Text>
					</TextWrapper>
					<TextWrapper>
						<TitleContent $isTitle={false}>{t('delivery.data.way.self.title')}</TitleContent>
						<Text>{t('delivery.data.way.self')}</Text>
					</TextWrapper>
				</ContentText>
			</Content>
		</Container>
	);
};

export default DeliveryAndPai;
