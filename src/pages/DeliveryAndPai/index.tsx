import { FC } from 'react';
import {} from '@mui/material';

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
	return (
		<Container>
			<TitleWrapper>
				<SquareTitle />
				<TitlePage>Доставка і оплата</TitlePage>
				<StarIcon src={star} alt="star" />
			</TitleWrapper>
			<Content>
				<ContentList>
					<TitleContent $isTitle>Для відправлення замовлення нам потрібні такі дані:</TitleContent>
					<CustomList>
						<CustomListItem>
							<CustomListItemIcon>
								<CustomDoneIcon />
							</CustomListItemIcon>
							<CustomListItemText>Обраний товар, розмір, колір</CustomListItemText>
						</CustomListItem>
						<CustomListItem>
							<CustomListItemIcon>
								<CustomDoneIcon />
							</CustomListItemIcon>
							<CustomListItemText>
								Контактні дані отримувача (ПІБ, номер телефону, електронна пошта)
							</CustomListItemText>
						</CustomListItem>
						<CustomListItem>
							<CustomListItemIcon>
								<CustomDoneIcon />
							</CustomListItemIcon>
							<CustomListItemText>
								Адресу (Країна, регіон, населений пункт, вулиця, номер будинку, індекс)
							</CustomListItemText>
						</CustomListItem>
						<CustomListItem>
							<CustomListItemIcon>
								<CustomDoneIcon />
							</CustomListItemIcon>
							<CustomListItemText>
								Чек/квитанцію про передоплату вартості товару та доставки (оплата здійснюється за
								рахунком чи на карту)
							</CustomListItemText>
						</CustomListItem>
					</CustomList>
				</ContentList>
				<ContentText>
					<TextWrapper>
						<TitleContent $isTitle={false}>Відправлення Україною</TitleContent>
						<Text>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
							incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum
							dolor sit amet, consectetur adipiscing elit
						</Text>
					</TextWrapper>
					<TextWrapper>
						<TitleContent $isTitle={false}>Міжнародні відправлення</TitleContent>
						<Text>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
							incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum
							dolor sit amet, consectetur adipiscing elit
						</Text>
					</TextWrapper>
					<TextWrapper>
						<TitleContent $isTitle={false}>Самовивіз</TitleContent>
						<Text>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
							incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum
							dolor sit amet, consectetur adipiscing elit
						</Text>
					</TextWrapper>
				</ContentText>
			</Content>
		</Container>
	);
};

export default DeliveryAndPai;
