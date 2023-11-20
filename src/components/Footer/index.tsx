import { FC } from 'react';
import { Collapse } from '@mui/material';
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
	CustomLink,
	SubMenuItem,
	CustomMenuItem,
	CustomSubMenuItem,
} from '../../Theme/FooterThema';

interface FooterProps {
	openSubMenu: boolean;
	handleOpenSubMenu: () => void;
	handleCloseSubMenu: () => void;
}

const Footer: FC<FooterProps> = ({ handleOpenSubMenu, openSubMenu, handleCloseSubMenu }) => {
	return (
		<FooterWrap>
			<LogoWrapper>
				<LogoIcon src={FooterLogo} alt="logo free-thread footer" />
			</LogoWrapper>
			<WrappMenuFooter>
				<MenuFooter>
					<TitleMenu>Про компанію</TitleMenu>
					<CustomLink to="/about">
						<li>Про нас</li>
					</CustomLink>
					<CustomLink to="/">
						<CustomMenuItem disableRipple divider onClick={handleOpenSubMenu}>
							Каталог
						</CustomMenuItem>
					</CustomLink>
					<Collapse in={openSubMenu} timeout="auto" unmountOnExit>
						<SubMenuItem to="/kiev">
							<CustomSubMenuItem disableRipple divider onClick={handleCloseSubMenu}>
								“Сорочки Київщини”
							</CustomSubMenuItem>
						</SubMenuItem>
						<SubMenuItem to="regions">
							<CustomSubMenuItem disableRipple divider onClick={handleCloseSubMenu}>
								“Регіони України”
							</CustomSubMenuItem>
						</SubMenuItem>
						<SubMenuItem to="/grandmother">
							<CustomSubMenuItem disableRipple divider onClick={handleCloseSubMenu}>
								“Віднови вишиванку своєї бабусі”
							</CustomSubMenuItem>
						</SubMenuItem>
						<SubMenuItem to="/accessories">
							<CustomSubMenuItem disableRipple divider onClick={handleCloseSubMenu}>
								Аксесуари
							</CustomSubMenuItem>
						</SubMenuItem>
					</Collapse>
					<CustomLink to="/delivery">
						<li>Доставка і оплата</li>
					</CustomLink>
					<CustomLink to="/comments">
						<li>Відгуки</li>
					</CustomLink>
					<CustomLink to="/contacts">
						<li>Контакти</li>
					</CustomLink>
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
