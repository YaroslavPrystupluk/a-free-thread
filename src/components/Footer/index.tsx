/* eslint-disable max-len */
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
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
	WrapperMenuFooter,
	MenuFooter,
	TitleMenu,
	IconMenuSocial,
	FooterLink,
	IconMenuBank,
	CustomLink,
	SubMenuItem,
	CustomMenuItem,
	CustomSubMenuItem,
	ArrowDown,
	ArrowRight,
} from '../../Theme/FooterThema';
import { CatalogLink } from '../../Theme/BurgerMenuThema';

interface FooterProps {
	openFooterSubMenu: boolean;
	handleOpenSubMenu: () => void;
	handleCloseSubMenu: () => void;
}

const Footer: FC<FooterProps> = ({ handleOpenSubMenu, openFooterSubMenu, handleCloseSubMenu }) => {
	const { t } = useTranslation();
	const upPage = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
		handleCloseSubMenu();
	};

	return (
		<FooterWrap>
			<WrapperMenuFooter>
				<LogoWrapper>
					<LogoIcon src={FooterLogo} alt="logo free-thread footer" />
				</LogoWrapper>
				<MenuFooter>
					<TitleMenu>{t('footer.title')}</TitleMenu>
					<CustomLink to="/about" onClick={upPage}>
						{t('about.title')}
					</CustomLink>
					<CatalogLink>
						<CustomMenuItem disableRipple divider onClick={handleOpenSubMenu}>
							{t('header.catalog')}
							{!openFooterSubMenu ? <ArrowRight /> : <ArrowDown />}
						</CustomMenuItem>
					</CatalogLink>
					<Collapse in={openFooterSubMenu} timeout="auto" unmountOnExit>
						<SubMenuItem to="/kiev">
							<CustomSubMenuItem disableRipple divider onClick={upPage}>
								{t('collection.kiev.title')}
							</CustomSubMenuItem>
						</SubMenuItem>
						<SubMenuItem to="regions">
							<CustomSubMenuItem disableRipple divider onClick={upPage}>
								{t('collection.grandmother.title')}
							</CustomSubMenuItem>
						</SubMenuItem>
						<SubMenuItem to="/grandmother">
							<CustomSubMenuItem disableRipple divider onClick={upPage}>
								{t('collection.grandmother.title')}
							</CustomSubMenuItem>
						</SubMenuItem>
						<SubMenuItem to="/accessories">
							<CustomSubMenuItem disableRipple divider onClick={upPage}>
								{t('collection.accessories.title')}
							</CustomSubMenuItem>
						</SubMenuItem>
					</Collapse>
					<CustomLink to="/delivery">{t('delivery.title')}</CustomLink>
					<CustomLink to="/comments">{t('header.button.reviews')}</CustomLink>
					<CustomLink to="/contacts">{t('header.button.contacts')}</CustomLink>
				</MenuFooter>
				<MenuFooter>
					<TitleMenu>{t('header.button.contacts')}</TitleMenu>
					<li>
						<FooterLink href="tel:+380503337820">+38 (050) 333 78 20</FooterLink>
						(viber, telegram)
					</li>
					<li>{t('contacts.address.p')}</li>
					<li>{t('footer.time')}</li>
					<li>
						{' '}
						<FooterLink href="mailto:Vilna.nytka@gmail.com"> Vilna.nytka@gmail.com</FooterLink>
					</li>
				</MenuFooter>
				<MenuFooter>
					<TitleMenu>{t('footer.social')}</TitleMenu>
					<li>
						<a
							href="https://www.facebook.com/vilnaNytka/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<IconMenuSocial src={logoFacebook} alt="icon Facebook" />
						</a>
						<a
							href="https://www.instagram.com/vilnanytka"
							target="_blank"
							rel="noopener noreferrer"
						>
							<IconMenuSocial src={logoInstagram} alt="icon Instagram" />
						</a>
					</li>
					<TitleMenu>{t('footer.pay')}</TitleMenu>
					<li>
						<IconMenuBank src={logoMasterCard} alt="icon MasterCard" />
						<IconMenuBank src={logoVisa} alt="icon Visa" />
					</li>
				</MenuFooter>
			</WrapperMenuFooter>
		</FooterWrap>
	);
};

export default Footer;
