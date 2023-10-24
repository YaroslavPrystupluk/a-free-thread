import { FC } from 'react';
import FooterLogo from '../../images/logo/logo_free_thread.webp';
import logoFacebook from '../../images/icon/facebook-v1-2.webp';
import logoInstagram from '../../images/icon/instagram-_1_-2.webp';
import logoMasterCard from '../../images/icon/mastercard_1.webp';
import logoVisa from '../../images/icon/visa_1.webp';
import {
	FooterWrap,
	LogoWrapper,
	LogoIcon,
	WrappMenuFooter,
	MenuFooter,
	TitleMenu,
	IconMenuSocial,
	FooterLink,
	IconMenuBank,
} from './styledFooter';

const Footer: FC = () => {
	return (
		<FooterWrap>
			<LogoWrapper>
				<LogoIcon src={FooterLogo} alt="logo free-thread footer" />
			</LogoWrapper>
			<WrappMenuFooter>
				<MenuFooter>
					<TitleMenu>Про компанію</TitleMenu>
					<li>Про нас</li>
					<li>Каталог</li>
					<li>Доставка і оплата</li>
					<li>Відгуки</li>
					<li>Контакти</li>
				</MenuFooter>
				<MenuFooter>
					<TitleMenu>Контакти</TitleMenu>
					<li>
						<FooterLink href="tel:+380503337820">+38 (050) 333 78 20</FooterLink>
						(viber, telegram)
					</li>
					<li>Україна, Київська обл., м.Вишневе</li>
					<li>пн-сб: з 9:00 до 18:00</li>
					<li>
						{' '}
						<FooterLink href="mailto:Vilna.nytka@gmail.com"> Vilna.nytka@gmail.com</FooterLink>
					</li>
				</MenuFooter>
				<MenuFooter>
					<TitleMenu>Ми в соцмережах:</TitleMenu>
					<li>
						<IconMenuSocial src={logoFacebook} alt="icon Facrbook" />
						<IconMenuSocial src={logoInstagram} alt="icon Instagrom" />
					</li>
					<TitleMenu>Способи оплати:</TitleMenu>
					<li>
						<IconMenuBank src={logoMasterCard} alt="icon MasterCard" />
						<IconMenuBank src={logoVisa} alt="icon Visa" />
					</li>
				</MenuFooter>
			</WrappMenuFooter>
		</FooterWrap>
	);
};

export default Footer;
