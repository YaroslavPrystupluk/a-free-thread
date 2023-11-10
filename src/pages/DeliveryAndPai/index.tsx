import { FC } from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';

import {
	Container,
	TitleWrapper,
	TitlePage,
	StarIcon,
	SquareTitle,
	Content,
	TitleContent,
	ContentList,
	CustomDoneIcon,
} from '../../Theme/DeliveryAndPai';
import star from '../../images/icon/star.webp';

const DeliveryAndPai: FC = () => {
	return (
		<Container>
			<TitleWrapper>
				<TitlePage>Доставка і оплата</TitlePage>
				<StarIcon src={star} alt="star" />
				<SquareTitle />
			</TitleWrapper>
			<Content>
				<ContentList>
					<TitleContent $isTitle>Для відправлення замовлення нам потрібні такі дані:</TitleContent>
					<List>
						<ListItem>
							<ListItemIcon>
								<CustomDoneIcon />
							</ListItemIcon>
							<ListItemText>Обраний товар, розмір, колір</ListItemText>
						</ListItem>
						<ListItem>
							<ListItemIcon>
								<CustomDoneIcon />
							</ListItemIcon>
							<ListItemText>
								Контактні дані отримувача (ПІБ, номер телефону, електронна пошта)
							</ListItemText>
						</ListItem>
						<ListItem>
							<ListItemIcon>
								<CustomDoneIcon />
							</ListItemIcon>
							<ListItemText>
								Адресу (Країна, регіон, населений пункт, вулиця, номер будинку, індекс
							</ListItemText>
						</ListItem>
						<ListItem>
							<ListItemIcon>
								<CustomDoneIcon />
							</ListItemIcon>
							<ListItemText>
								Чек/квитанцію про передоплату вартості товару та доставки (оплата здійснюється за
								рахунком чи на карту)
							</ListItemText>
						</ListItem>
					</List>
				</ContentList>
				<div>
					<div>
						<TitleContent $isTitle={false}>Відправлення Україною</TitleContent>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
							incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum
							dolor sit amet, consectetur adipiscing elit
						</p>
					</div>
					<div>
						<TitleContent $isTitle={false}>Міжнародні відправлення</TitleContent>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
							incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum
							dolor sit amet, consectetur adipiscing elit
						</p>
					</div>
					<div>
						<TitleContent $isTitle={false}>Самовивіз</TitleContent>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
							incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum
							dolor sit amet, consectetur adipiscing elit
						</p>
					</div>
				</div>
			</Content>
		</Container>
	);
};

export default DeliveryAndPai;
