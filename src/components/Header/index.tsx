import { FC } from 'react';
import BurgerMenu from './BurgerMenu/BurgerMenu';
import Search from './Search/Search';
import MenuHeader from './MenuHeader/MenuHeader';

import {
	HeaderWrapper,
	LogoWrapper,
	Logo,
	PhoneWrapper,
	PhoneNumber,
	SearchDesktop,
	SelectLanguage,
	BtnLang,
	SubHeader,
	SearchMobile,
} from './stylesHeader';
import logoBig from '../../images/logo/logo_free_thread.webp';
import phone from '../../images/icon/phone.webp';

interface HeaderProps {
	handleOpenModal: () => void;
}

const Header: FC<HeaderProps> = ({ handleOpenModal }) => {
	return (
		<header>
			<HeaderWrapper>
				<LogoWrapper>
					<Logo src={logoBig} alt="logo free thread" />
				</LogoWrapper>
				<PhoneWrapper>
					<img src={phone} alt="icon phone" />
					<PhoneNumber href="tel:+380503337820">+38 (050) 333 78 20</PhoneNumber>
				</PhoneWrapper>
				<MenuHeader />
				<SearchDesktop>
					<Search handleOpenModal={handleOpenModal} />
				</SearchDesktop>
				<SelectLanguage>
					<BtnLang>UA</BtnLang>
					<BtnLang>EN</BtnLang>
				</SelectLanguage>
			</HeaderWrapper>
			<SubHeader>
				<BurgerMenu />
				<SearchMobile>
					<Search handleOpenModal={handleOpenModal} />
				</SearchMobile>
			</SubHeader>
		</header>
	);
};

export default Header;
