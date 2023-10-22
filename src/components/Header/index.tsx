import { FC } from 'react';
import { Box } from '@mui/material';
import BurgerMenu from './BurgerMenu/BurgerMenu';
import Search from './Search/Search';
import MenuHeader from './MenuHeader/MenuHeader';

import {
	HeaderWrapper,
	LogoWrapper,
	Logo,
	PhoneWrapper,
	PhoneNumber,
	SelectLanguage,
	BtnLang,
	SubHeader,
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
				<Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
					<Search handleOpenModal={handleOpenModal} />
				</Box>
				<SelectLanguage>
					<BtnLang>UA</BtnLang>
					<BtnLang>EN</BtnLang>
				</SelectLanguage>
			</HeaderWrapper>
			<SubHeader>
				<BurgerMenu />
				<Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
					<Search handleOpenModal={handleOpenModal} />
				</Box>
			</SubHeader>
		</header>
	);
};

export default Header;
