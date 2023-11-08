import { FC } from 'react';
import {
	Container,
	TitleWrapper,
	TitlePage,
	StarIcon,
	SquareTitle,
	Content,
	TitleContent,
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
				<TitleContent>Для відправлення замовлення нам потрібні такі дані:</TitleContent>
				<ul>
					<li>Обраний товар, розмір, колір</li>
					<li>Контактні дані отримувача (ПІБ, номер телефону, електронна пошта)</li>
					<li>Адресу (Країна, регіон, населений пункт, вулиця, номер будинку, індекс</li>
					<li>
						Чек/квитанцію про передоплату вартості товару та доставки (оплата здійснюється за
						рахунком чи на карту)
					</li>
				</ul>

				<div>
					<TitleContent>Відправлення Україною</TitleContent>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor
						sit amet, consectetur adipiscing elit
					</p>
				</div>
				<div>
					<TitleContent>Міжнародні відправлення</TitleContent>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor
						sit amet, consectetur adipiscing elit
					</p>
				</div>
				<div>
					<TitleContent>Самовивіз</TitleContent>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor
						sit amet, consectetur adipiscing elit
					</p>
				</div>
			</Content>
		</Container>
	);
};

export default DeliveryAndPai;
